from django.shortcuts import render


from django.http import HttpResponse
from shook.models import Lead, Shake
from shook.serializers import LeadSerializer, UserSerializer, ShakeSerializer
from rest_framework import generics, permissions, viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from rest_framework.decorators import api_view, permission_classes


class ShakeViewSet(generics.ListCreateAPIView):
    queryset = Shake.objects.all()
    serializer_class = ShakeSerializer

    def post(self, request):
        print('IN THE POST')
        serializer = ShakeSerializer(data=request.data)
        if serializer.is_valid():
            shake = serializer.save()
            if shake:
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShakeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shake.objects.all()
    serializer_class = ShakeSerializer

    def retrieve(self, request, pk):
        print('IN THE GET DETAIL ROUTe')
        shake = Shake.objects.get(pk=pk)
        serializer = ShakeSerializer(shake)
        username = request.user.username
        id = request.user.id
        header = {
        "username" : f"{username}",
        "id": f"{id}"
        }
        return Response(serializer.data, headers=header)

    def put(self, request, pk):
        print('IN THE PUT ROUTE')
        shake = Shake.objects.get(pk=pk)
        serializer = ShakeSerializer(shake, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            if (shake.proposer_status == "completed" and shake.acceptor_status == "completed"):
                shake.status = "completed"
                if serializer.is_valid():
                    serializer.save()
            if (shake.proposer_status == "abandoned" and shake.acceptor_status == "abandoned"):
                shake.delete()
                return Response(status=status.HTTP_200_OK)
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def retrieve(self, request, pk=None):
        if pk == 'i':
            return Response(UserSerializer(request.user,
                context={'request':request}).data)
        return super(UserViewSet, self).retrieve(request, pk)



class CreateUser(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.get_or_create(user=user)[0]
            header = {"Authorization" : f'{token}'}
            print(token)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED, headers=header)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated,))
def getUserFromToken(request):
    serializer = UserSerializer(request.user)
    if serializer:
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

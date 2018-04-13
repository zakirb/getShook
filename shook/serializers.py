from rest_framework import serializers
from shook.models import Lead, Shake
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('id', 'name', 'email', 'message')

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    username = serializers.CharField(
        required=True,
        max_length=32,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    password = serializers.CharField(required=True, min_length=8)
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'])
        user.first_name = validated_data['first_name']
        print(user.first_name)
        user.last_name = validated_data['last_name']
        return user

    class Meta:
        model = User
        fields = ('id','username', 'first_name', 'last_name', 'email', 'password')

class ShakeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shake
        fields = ('id', 'proposal', 'proposer', 'acceptor', 'description', 'type', 'proposer_status', 'acceptor_status', 'status')

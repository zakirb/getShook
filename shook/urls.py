from django.urls import path, re_path
from . import views

#added for Token
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = router.urls

urlpatterns += [
    path('shakes/<int:pk>/', views.ShakeDetail.as_view()),
    path('shakes/edit/', views.ShakeDetail.as_view()),
    path('shakes/', views.ShakeViewSet.as_view()),
    path('user/create/', views.CreateUser.as_view()),
    path('token/', views.getUserFromToken),
    # path('thisisatest/', views.TestViews.as_view()), # remove soon
    re_path(r'^obtain-auth-token/$', obtain_auth_token),
]

    # path('login/', views.login_view, name='login'),

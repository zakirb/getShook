from django.urls import path, re_path
from . import views
urlpatterns = [
    path('', views.index ),
    path('profile/', views.index ),
    path('login/', views.index ),
    path('signup/', views.index ),
    path('proposeshake/', views.index ),
    re_path(r'^shakes/.+$', views.index ),
    # path('shakes/', view.index ),
    # re_path(r'^\w*/', views.index ),
]

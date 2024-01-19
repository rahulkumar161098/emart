from django.contrib import admin
from django.urls import path
from .views import UserAccount, UserLogin

urlpatterns = [
   path('user-api/', UserAccount.as_view(), name='user-api'),
   path('login-api/', UserLogin.as_view(), name=" login-api")
]
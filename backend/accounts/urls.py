from django.contrib import admin
from django.urls import path
from .views import UserAccount
from accounts import views
# from venders import views

urlpatterns = [
   path('user-api/', UserAccount.as_view(), name='user-api'),
   path('login-api/', views.user_login, name=" login-api")
]
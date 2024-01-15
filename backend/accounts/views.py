from django.shortcuts import render
from .models import CustomUser
from .serializer import UserAccountSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.authtoken.models import Token

import secrets
import random


# Create your views here.

def generate_verification_token():
    return secrets.token_hex(16)

def generate_otp(digit):
    return random.randint(0, 9)

class UserAccount(APIView):
   def get(self, request, format= None ):
      json_data= CustomUser.objects.all()
      serializer= UserAccountSerializer(json_data, many=True)
      return Response(serializer.data)
   
   def post(self, request, format= None):
      serializer= UserAccountSerializer(data= request.data)
      otp=generate_otp(6)
      if serializer.is_valid():
         serializer.save()
         return Response(status=status.HTTP_202_ACCEPTED)
      return Response (status=status.HTTP_403_FORBIDDEN)



@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        user = None
        if '@' in username:
            try:
                user = CustomUser.objects.get(email=username)
            except ObjectDoesNotExist:
                pass

        if not user:
            user = authenticate(username=username, password=password)

        if user:
            # token, _ = Token.objects.get_or_create(user=user)
            return Response( status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
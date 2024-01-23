from django.shortcuts import render
from .models import CustomUser
from .serializer import UserAccountSerializer, UserLoginSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate

import secrets
import random


# Create your views here.

def generate_verification_token():
    return secrets.token_hex(16)

def generate_otp(digit):
    return random.randint(0, 9)

class UserAccount(APIView):
#    authentication_classes = (QuietBasicAuthentication)


   def get(self, request, format= None ):
      json_data= CustomUser.objects.all()
      serializer= UserAccountSerializer(json_data, many=True)
      return Response(serializer.data)
   
   def post(self, request, format= None):
      serializer= UserAccountSerializer(data= request.data)
    #   otp=generate_otp(6)
      if serializer.is_valid():
         user=serializer.save()

         return Response({
             'user': user.email,
             'message': 'User Created',
             'status': status.HTTP_201_CREATED
             },status=status.HTTP_201_CREATED)
      return Response (status=status.HTTP_403_FORBIDDEN)



# @api_view(['POST'])
# def user_login(request):
#     #  permission_classes = [IsAuthenticated]
#     if request.method == 'POST':
#         username = request.data.get('username')
#         password = request.data.get('password')

#         user = authenticate(username=username, password=password)
#         if user is not None:
#         # A backend authenticated the credentials
#             return Response(user, status=status.HTTP_200_OK)
    
#         else:
#         # No backend authenticated the credentials
            

#             return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# @csrf_exempt 
class UserLogin(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data['user']
        # refresh = RefreshToken.for_user(user)
        user_details= {
            'email': user.email,
            'name': user.first_name,
            'id': user.id,
            'user_type': user.u_type,
        }

        return Response({
            'user':user_details,
            'status':status.HTTP_200_OK
        }, status=status.HTTP_200_OK)
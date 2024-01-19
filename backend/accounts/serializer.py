from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
# from .views import generate_otp

class UserAccountSerializer(serializers.ModelSerializer):
   class Meta:
      model= CustomUser
      fields="__all__"


class UserLoginSerializer(serializers.ModelSerializer):
   username= serializers.CharField()
   password= serializers.CharField(write_only=True)
   class Meta:
        model = CustomUser  # Specify the model associated with the serializer
        fields = ['username', 'password']  # Include the fields you want to serialize
   def validate(self, data):
      username= data.get('username')
      password= data.get('password')
      user = authenticate(request=self.context.get('request'), username=username, password=password)
      if not user:
         raise serializers.ValidationError('Invalid credentials. Please try again.')
      
      data['user'] = user
      return data


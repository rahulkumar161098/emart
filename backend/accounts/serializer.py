from rest_framework import serializers
from .models import CustomUser
# from .views import generate_otp

class UserAccountSerializer(serializers.ModelSerializer):
   class Meta:
      model= CustomUser
      fields="__all__"

   def create(self, validated_data):
      otp = serializers.CharField(write_only=True, required=False)
      
      user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name= validated_data['last_name'],
            otp=validated_data['otp']
        )
      user.set_password(validated_data['password'])
      user.save()
      return user

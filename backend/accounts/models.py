from django.db import models
from django.contrib.auth.models import AbstractUser, Permission
# from 

# Create your models here.

# custome model
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    u_type= models.CharField(max_length=20, default="user")
    otp = models.CharField(max_length=6, null=True, blank=True)  # Add the otp field here

    # Add custom fields here, if needed

    # def __str__(self):
    #     return self.email



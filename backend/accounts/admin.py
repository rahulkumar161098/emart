from django.contrib import admin
from .models import CustomUser

# Register your models here.
class CustomUserView(admin.ModelAdmin):
   list_display= ['username','email', 'u_type','last_login']
admin.site.register(CustomUser, CustomUserView)



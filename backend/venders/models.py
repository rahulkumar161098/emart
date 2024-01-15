from django.db import models
from accounts.models import CustomUser

# Create your models here.
class ProductCategory(models.Model):
   CATEGORY=[
      ('---','----------'),
      ('PHONE', 'PHONE'),
      ('LAPTOP', 'LAPTOP')
   ]
   category= models.CharField(choices=CATEGORY, default="un_category", max_length=30)


CATEGORY=[
   ('---','----------'),
   ('PHONE', 'PHONE'),
   ('LAPTOP', 'LAPTOP')
]   


class ShopDetails(models.Model):
   email= models.ForeignKey(CustomUser, to_field='email', on_delete=models.CASCADE, unique=True)
   shop_name= models.CharField(max_length=100)
   shop_gst= models.CharField(max_length=100)
   local_address= models.CharField(max_length=200)
   dist= models.CharField(max_length=200)
   state= models.CharField(max_length=200)
   pin_code= models.CharField(max_length=200)
   

   def __str__(self):
       return self.shop_name


class ListProduct(models.Model):

   title= models.CharField(max_length=40)
   description= models.TextField()
   selling_price= models.IntegerField()
   market_price= models.IntegerField()
   available= models.BooleanField(default= True)
   created_at= models.DateTimeField(auto_now= True)
   product_unit= models.IntegerField()
   category= models.CharField(choices=CATEGORY, default="un_category", max_length=30)
   email= models.OneToOneField(CustomUser, to_field='email', on_delete=models.CASCADE)
   # category1= models.ForeignKey(ProductCategory, on_delete= models.CASCADE)

   # def __str__(self):
   #    return self.title



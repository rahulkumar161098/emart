
from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from .models import ListProduct, ShopDetails, ProductCategory
from .serializer import ProductSerializer, ShopSerializerView, CaterogySerializerView
from django.http import Http404 
from rest_framework import status

from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.generics import GenericAPIView

# Create your views here.

class VenderProduct(APIView):

   def get(self, request, *args, **kwargs):
      json_data= ListProduct.objects.all()
      serializer= ProductSerializer(json_data, many=True)
      return Response(serializer.data)
   
   def post(self, request, format=None):
      serializer= ProductSerializer(data= request.data)
      if serializer.is_valid():
         serializer.save()
         return Response(status=status.HTTP_202_ACCEPTED)
      return Response (status=status.HTTP_403_FORBIDDEN)
   

class CategoryView(APIView):
   json_data= ProductCategory.objects.all()
   print(json_data)
   serializer= CaterogySerializerView(json_data, many=True)
   print('print',serializer)
   def get(self, request):
      return Response(self.serializer.data)
   
   
class VenderShop(GenericAPIView, ListModelMixin, CreateModelMixin):

   queryset = ShopDetails.objects.all()
   serializer_class= ShopSerializerView

   def get(self, request, *args, **kwargs):
      # print(self.serializ er_class)
      return self.list(request, *args, **kwargs)
   
   # to create model instance and save to db
   def post(self, request, *args, **kwargs):
      return self.create(request, *args, **kwargs)
   


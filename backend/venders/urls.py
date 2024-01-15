
from django.contrib import admin
from django.urls import path
from .views import VenderProduct, VenderShop

urlpatterns = [
   path('products/', VenderProduct.as_view(), name="products" ),
   path('shop_details/', VenderShop.as_view(), name="shop_details")
]


from django.contrib import admin
from django.urls import path
from .views import VenderProduct, VenderShop, CategoryView

urlpatterns = [
   path('products/', VenderProduct.as_view(), name="products" ),
   path('shop_details/', VenderShop.as_view(), name="shop_details"),
   path('category/', CategoryView.as_view(), name="category")
]

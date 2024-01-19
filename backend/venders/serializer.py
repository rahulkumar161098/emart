from venders.models import ListProduct, ShopDetails, ProductCategory
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
   class Meta:
      model= ListProduct
      fields= '__all__'

class ShopSerializer(serializers.ModelSerializer):
   class Meta:
      model= ShopDetails
      fields= '__all__'

class ShopSerializerView(serializers.ModelSerializer):
   class Meta: 
      model= ShopDetails
      fields= '__all__'

class CaterogySerializerView(serializers.ModelSerializer):
   class Meta:
      model= ProductCategory
      fields= "__all__"
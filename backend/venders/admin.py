from django.contrib import admin
from venders.models import ListProduct, ShopDetails, ProductCategory

# Register your models here.
class ProductView(admin.ModelAdmin):
   list_display=('title','selling_price', 'email')
admin.site.register(ListProduct, ProductView)

class ShopDetailsView(admin.ModelAdmin):
   list_display=['id','shop_name', 'shop_gst', 'email']
admin.site.register(ShopDetails,ShopDetailsView)

# class CategoryView(admin.ModelAdmin):
#    list_display=['category']
admin.site.register(ProductCategory)

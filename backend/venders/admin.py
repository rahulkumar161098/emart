from django.contrib import admin
from venders.models import ListProduct, ShopDetails

# Register your models here.
class ProductView(admin.ModelAdmin):
   list_display=('title','selling_price', 'email')
admin.site.register(ListProduct, ProductView)

class ShopDetailsView(admin.ModelAdmin):
   list_display=['id','shop_name', 'shop_gst', 'email']
admin.site.register(ShopDetails,ShopDetailsView)

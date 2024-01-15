
from django.contrib import admin
from django.urls import include, path
from venders import urls
from accounts import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('vender-api/', include('venders.urls')),
    path('acount-auth-api/', include('accounts.urls')),
    # path('user-api/', include('user.urls')),
    # path('account_api/', include())
]

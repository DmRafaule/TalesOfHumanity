from django.urls import path
from .views import home, about, navigation


urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('navigation/', navigation, name='navigation'),
    path('about/navigation/', navigation, name='about_navigation'),
]

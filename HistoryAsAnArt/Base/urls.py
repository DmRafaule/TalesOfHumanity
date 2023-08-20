from django.urls import path
from .views import home, navigation, search

urlpatterns = [
    path('', home, name='home'),
    path('search/', search, name='search'),
    path('navigation/', navigation, name='navigation'),
    path('search/navigation/', navigation, name='navigation'),
    path('articles/<slug:slug>/navigation/', navigation, name='navigation'),
]

from django.urls import path
from .views import home, navigation, search, about, contacts, send

urlpatterns = [
    path('', home, name='home'),
    path('navigation/', navigation, name='navigation'),
    path('about/', about, name='about'),
    path('about/navigation/', navigation, name='navigation'),
    path('contacts/', contacts, name='contacts'),
    path('contacts/send/', send, name='send'),
    path('contacts/navigation/', navigation, name='navigation'),
    path('search/', search, name='search'),
    path('search/navigation/', navigation, name='navigation'),
    path('articles/<slug:slug>/navigation/', navigation, name='navigation'),
]

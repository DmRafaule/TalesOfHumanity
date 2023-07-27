from django.urls import path, include
from .views import articles


urlpatterns = [
    path('<slug:art_slug>/', articles, name='articles'),
]

from django.urls import path, include
from .views import articles, increase_likes, increase_shares, articles_short, increase_likes_short, increase_shares_short


urlpatterns = [
    path('<slug:art_slug>/', articles, name='articles'),
    path('<slug:art_slug>/like/', increase_likes, name='increase_likes'),
    path('<slug:art_slug>/share/', increase_shares, name='increase_shares'),
    path('<slug:short>/<slug:art_slug>/', articles_short, name='articles_short'),
    path('<slug:short>/<slug:art_slug>/like/', increase_likes_short),
    path('<slug:short>/<slug:art_slug>/share/', increase_shares_short),
]

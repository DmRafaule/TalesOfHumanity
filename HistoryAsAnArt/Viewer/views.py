from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from django.http import HttpResponseNotFound
from Base.models import Article, Category
from django.conf import settings


def articles(request, art_slug):
    article = get_object_or_404(Article, slug=art_slug)
    media_root = settings.MEDIA_URL
    context = {
        'media_root': media_root,
        'article': article,
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
    }
    return render(request, article.template.path, context=context)

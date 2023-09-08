from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from django.http import HttpResponseNotFound, JsonResponse
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
    views_cooficient = 1
    likes_cooficient = 3
    shares_cooficient = 10
    try:
        article.rank = (article.views*views_cooficient +
                        article.likes*likes_cooficient +
                        article.shares*shares_cooficient)\
                        * (article.likes/article.views) * (article.shares/article.views) * (article.shares/article.likes)
    except:
        article.rank = 0
    # Increase views count
    article.views = article.views + 1
    article.save()

    return render(request, article.template.path, context=context)


def articles_short(request, art_slug, short):
    article = get_object_or_404(Article, slug=art_slug)
    media_root = settings.MEDIA_URL
    context = {
        'media_root': media_root,
        'article': article,
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
    }
    return render(request, article.template_shorter.path, context=context)

# Basicaly one browser one like for one article
def increase_likes(request, art_slug):
    isLiked = request.session.get("is_liked_" + art_slug, False)
    if not isLiked:
        article = get_object_or_404(Article, slug=art_slug)
        article.likes = article.likes + 1
        article.save()
        request.session["is_liked_" + art_slug] = True
    data = {
        'likes': article.likes,
    }
    return JsonResponse(data)


# No checks for multiple shares, because I do not want it. 
# I want as many as I could get
def increase_shares(request, art_slug):
    article = get_object_or_404(Article, slug=art_slug)
    article.shares = article.shares + 1
    article.save()
    data = {
        'shares': article.shares,
    }
    return JsonResponse(data)


def increase_likes_short(request, art_slug, short):
    isLiked = request.session.get("is_liked_" + art_slug, False)
    if not isLiked:
        article = get_object_or_404(Article, slug=art_slug)
        article.likes = article.likes + 1
        article.save()
        request.session["is_liked_" + art_slug] = True
    data = {
        'likes': article.likes,
    }
    return JsonResponse(data)


# No checks for multiple shares, because I do not want it. 
# I want as many as I could get
def increase_shares_short(request, art_slug, short):
    article = get_object_or_404(Article, slug=art_slug)
    article.shares = article.shares + 1
    article.save()
    data = {
        'shares': article.shares,
    }
    return JsonResponse(data)

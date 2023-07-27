from django.shortcuts import render
from .models import Category, Article
from django.utils.translation import get_language, activate, gettext


def home(request):
    context = {
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
    }
    return render(request, 'Base/home.html', context)


def search(request):
    if request.method == 'GET':
        searched = request.GET['searched']
        articles = Article.objects.filter(title__icontains=searched)
        context = {
            'articles': Article.objects.all(),
            'categories': Category.objects.all(),
            'searched': searched,
            'foundedAtricles': articles,
        }
        return render(request, 'Base/search.html', context)
    else:
        context = {
            'articles': Article.objects.all(),
            'categories': Category.objects.all(),
        }
        return render(request, 'Base/search.html', context)


def navigation(request, slug='empty'):
    if request.method == 'POST':
        cat_id = request.POST['category_id']
        cat_paren_name = request.POST['parent']
        cat = Category.objects.get(id=int(cat_id))
    context = {
        'articles': cat.articles.all(),
        'categories': cat.subcategories.all().exclude(name=cat_paren_name),
    }
    return render(request, 'Base/navigation.html', context)


def page_not_found(request, exception):
    context = {
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
    }
    return render(request, 'Base/404.html', context=context, status=404)

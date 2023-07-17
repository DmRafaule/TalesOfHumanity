from django.shortcuts import render
from .models import Category, Article


def home(request):
    context = {
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
    }
    return render(request, 'Base/home.html', context)


def about(request):
    context = {
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
    }
    return render(request, 'Base/about.html', context)


def navigation(request):
    if request.method == 'POST':
        cat_id = request.POST['category_id']
        cat_paren_name = request.POST['parent']
        cat = Category.objects.get(id=int(cat_id))
    context = {
        'articles': cat.articles.all(),
        'categories': cat.subcategories.all().exclude(name=cat_paren_name),
    }
    return render(request, 'Base/navigation.html', context)

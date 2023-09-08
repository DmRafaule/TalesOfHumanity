from django.shortcuts import render
from django.http import JsonResponse
from .models import Category, Article, Message
from HistoryAsAnArt.settings import MEDIA_URL
from django.utils.translation import gettext
import re


def home(request):
    media_root = MEDIA_URL
    # 3 newest articles
    new_articles = list()
    available_articles = Article.objects.filter(is_published=True)
    art = available_articles.latest('time_added')
    for i in range(0, 3):
        new_articles.append(art)
        available_articles = available_articles.exclude(id=art.id)
        art = available_articles.latest('time_added')

    # 3 most popular articles
    popular_articles = list()
    available_articles = Article.objects.filter(is_published=True)
    # Has change the order in such way that objects with bigger rang will be first
    available_articles = available_articles.order_by('-rank')
    for i in range(0, 3):
        popular_articles.append(available_articles.first())
        available_articles = available_articles.exclude(id=available_articles.first().id)

    context = {
        'media_root': media_root,
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
        'new_articles': new_articles,
        'popular_articles': popular_articles,
        # Just articles that not published yet
        'future_articles': Article.objects.filter(is_published=False),
    }
    return render(request, 'Base/home.html', context)


def about(request):
    context = {
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
    }
    return render(request, 'Base/about.html', context)


def contacts(request):
    context = {
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
    }
    return render(request, 'Base/contacts.html', context)


def search(request):
    if request.method == 'GET':
        searched = request.GET['searched']
        articles = Article.objects.filter(title__icontains=searched).exclude(is_published=False)
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
        'articles': cat.articles.all().exclude(is_published=False),
        'categories': cat.subcategories.all().exclude(name=cat_paren_name),
    }
    return render(request, 'Base/navigation.html', context)


def send(request):
    # for validating an Email
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
    status = 200
    message = {
        'common': '',
        'name': '',
        'position': '',
        'email': '',
        'about': '',
    }
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        position = request.POST['position']
        about = request.POST['about']

        if len(name) > 20:
            message['name'] = gettext('⚠ слишком длинное имя')
            status = 406

        if len(position) > 50:
            message['position'] = gettext('⚠ слишком длинное название')
            status = 406

        if len(email) == 0:
            message['email'] = gettext('⚠ Обязательно')
            status = 406
        else:
            # Email addres does not right
            if not re.fullmatch(regex, email):
                message['email'] = gettext('⚠ неправильный формат')
                status = 406

        if len(about) == 0:
            message['about'] = gettext('⚠ Обязательно')
            status = 406

        if status == 406:
            message['common'] = gettext('✖ Не могу отправить сообщение')
        elif status == 200:
            message['common'] = gettext('✔ Сообщение успешно отправленно')
            msg = Message(name=name, message=about, position=position, email=email)
            msg.save()
            #send_mail(
            #    name + " из " + position,
            #    about,
            #    email,
            #    ["chedrden@gmail.com"],
            #    fail_silently=False,
            #)

    return JsonResponse(message, status=status)


def page_not_found(request, exception):
    context = {
        'articles': Article.objects.all(),
        'categories': Category.objects.all(),
    }
    return render(request, 'Base/404.html', context=context, status=404)

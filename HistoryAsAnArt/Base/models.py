from django.db import models
from django.urls import reverse
from django.contrib.sitemaps import Sitemap
import os, shutil
from django.db.models.signals import pre_delete
from django.dispatch import receiver
from HistoryAsAnArt.settings import MEDIA_ROOT


def user_directory_path(instance, filename):
    return "articles/{0}/{1}".format(instance.slug, filename)


class Article(models.Model):
    title = models.CharField(max_length=100, db_index=True, unique=True, blank=False)
    slug = models.SlugField(max_length=100, db_index=True, unique=True, blank=False)
    template = models.FileField(upload_to=user_directory_path, blank=False)
    template_shorter = models.FileField(upload_to=user_directory_path, blank=True, null=True)
    time_added = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    rank = models.FloatField(default=0.0)
    # I know the most stupiedest way to hold array of imgs but this work, and I'm ok with this
    img1 = models.ImageField(upload_to=user_directory_path, blank=True)
    img2 = models.ImageField(upload_to=user_directory_path, blank=True)
    img3 = models.ImageField(upload_to=user_directory_path, blank=True)
    img4 = models.ImageField(upload_to=user_directory_path, blank=True)
    img5 = models.ImageField(upload_to=user_directory_path, blank=True)
    img6 = models.ImageField(upload_to=user_directory_path, blank=True)
    img7 = models.ImageField(upload_to=user_directory_path, blank=True)
    img8 = models.ImageField(upload_to=user_directory_path, blank=True)
    img9 = models.ImageField(upload_to=user_directory_path, blank=True)
    img10 = models.ImageField(upload_to=user_directory_path, blank=True)
    img11 = models.ImageField(upload_to=user_directory_path, blank=True)
    img12 = models.ImageField(upload_to=user_directory_path, blank=True)
    img13 = models.ImageField(upload_to=user_directory_path, blank=True)
    img14 = models.ImageField(upload_to=user_directory_path, blank=True)
    img15 = models.ImageField(upload_to=user_directory_path, blank=True)
    img16 = models.ImageField(upload_to=user_directory_path, blank=True)
    img17 = models.ImageField(upload_to=user_directory_path, blank=True)
    img18 = models.ImageField(upload_to=user_directory_path, blank=True)
    img19 = models.ImageField(upload_to=user_directory_path, blank=True)
    img20 = models.ImageField(upload_to=user_directory_path, blank=True)
    img21 = models.ImageField(upload_to=user_directory_path, blank=True)
    img22 = models.ImageField(upload_to=user_directory_path, blank=True)
    img23 = models.ImageField(upload_to=user_directory_path, blank=True)
    img24 = models.ImageField(upload_to=user_directory_path, blank=True)
    img25 = models.ImageField(upload_to=user_directory_path, blank=True)
    img26 = models.ImageField(upload_to=user_directory_path, blank=True)
    img27 = models.ImageField(upload_to=user_directory_path, blank=True)
    img28 = models.ImageField(upload_to=user_directory_path, blank=True)
    img29 = models.ImageField(upload_to=user_directory_path, blank=True)
    img30 = models.ImageField(upload_to=user_directory_path, blank=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("articles", kwargs={"art_slug": self.slug})

    def get_absolute_url_forShort(self):
        return reverse("articles_short", kwargs={"short": "short", "art_slug": self.slug})

    def increase_likes(self):
        self.likes = self.likes + 1

    def increase_shares(self):
        self.shares = self.shares + 1


class Category(models.Model):
    name = models.CharField(max_length=50, db_index=True, unique=True, blank=False)
    slug = models.SlugField(max_length=50, db_index=True, unique=True, blank=False)
    articles = models.ManyToManyField(Article, blank=True)
    subcategories = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("categories", kwargs={"cat_slug": self.slug})


class ArticleSitemap(Sitemap):
    i18n = True

    def items(self):
        return Article.objects.all()

    def lastmod(self, obj):
        return obj.time_updated


class StaticSitemap(Sitemap):
    i18n = True

    def items(self):
        return ["about", "contacts", "home"]

    def location(self, item):
        return reverse(item)


class ArticleShortSitemap(Sitemap):
    i18n = True

    def items(self):
        items = Article.objects.all()
        for item in items:
            if not item.template_shorter:
                items = items.exclude(id=item.id)
        return items

    def lastmod(self, obj):
        return obj.time_updated

    def location(self, item):
        return item.get_absolute_url_forShort()


class Message(models.Model):
    name = models.CharField(max_length=20, db_index=True)
    position = models.CharField(max_length=50, db_index=True)
    email = models.EmailField(blank=False)
    message = models.TextField(max_length=500, blank=False)
    time_added = models.DateTimeField(auto_now_add=True)


# Remove all loaded files before deleting on database
@receiver(pre_delete, sender=Article)
def cleanupArticle(sender, instance, **kwargs):
    shutil.rmtree(os.path.join(MEDIA_ROOT, f"articles/{instance.slug}"))

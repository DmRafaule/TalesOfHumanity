from django.db import models
from django.urls import reverse

class Article(models.Model):
    title = models.CharField(max_length=100, db_index=True, unique=True, blank=False)
    slug = models.SlugField(max_length=100, db_index=True, unique=True, blank=False)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("articles", kwargs={"article_slug": self.slug})

class Category(models.Model):
    name = models.CharField(max_length=50, db_index=True, unique=True, blank=False)
    slug = models.SlugField(max_length=50, db_index=True, unique=True, blank=False)
    articles = models.ManyToManyField(Article, blank=True)
    subcategories = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("categories", kwargs={"category_slug": self.slug})
    

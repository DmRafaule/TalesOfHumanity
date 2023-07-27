from django.db import models
from django.urls import reverse


def user_directory_path(instance, filename):
    return "articles/{0}/{1}".format(instance.slug, filename)


class Article(models.Model):
    title = models.CharField(max_length=100, db_index=True, unique=True, blank=False)
    slug = models.SlugField(max_length=100, db_index=True, unique=True, blank=False)
    template = models.FileField(upload_to=user_directory_path, blank=False)
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


class Category(models.Model):
    name = models.CharField(max_length=50, db_index=True, unique=True, blank=False)
    slug = models.SlugField(max_length=50, db_index=True, unique=True, blank=False)
    articles = models.ManyToManyField(Article, blank=True)
    subcategories = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("categories", kwargs={"cat_slug": self.slug})

from modeltranslation.translator import translator, TranslationOptions
from .models import Category, Article


class ArticleTranslationOptions(TranslationOptions):
    fields = ('title',)


class CategoryTranslationOptions(TranslationOptions):
    fields = ('name',)


translator.register(Article, ArticleTranslationOptions)
translator.register(Category, CategoryTranslationOptions)

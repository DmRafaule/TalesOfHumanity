from django.contrib import admin
from .models import Article, Category


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug')
    list_display_links = ( 'title', )
    search_fields = ( 'title', )
    prepopulated_fields = { 'slug': ('title',)}

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug' )
    list_display_links = ( 'name',  )
    search_fields = ( 'name', )
    prepopulated_fields = { 'slug': ('name',)}



admin.site.register(Article, ArticleAdmin)
admin.site.register(Category, CategoryAdmin)

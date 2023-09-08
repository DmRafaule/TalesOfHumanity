from django.contrib import admin
from .models import Article, Category, Message


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'time_updated', 'time_added', 'is_published')
    list_display_links = ('title',)
    list_editable = ('is_published',)
    list_filter = ('is_published', 'time_updated', 'time_added')
    search_fields = ('title',)
    prepopulated_fields = {'slug': ('title',)}


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    list_display_links = ('name',)
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}


class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'email', 'time_added')
    list_display_links = ('name',)
    search_fields = ('name', 'position', 'email')


admin.site.register(Article, ArticleAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Message, MessageAdmin)

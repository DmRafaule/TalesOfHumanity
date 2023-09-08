from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.conf.urls.i18n import i18n_patterns
# For sitemap
from django.contrib.sitemaps.views import sitemap
from Base.models import ArticleSitemap, StaticSitemap, ArticleShortSitemap
sitemaps = {
    "articles": ArticleSitemap,
    "static": StaticSitemap,
    "articles_short": ArticleShortSitemap,
}


urlpatterns = [
    path('admin/', admin.site.urls),
    path(
        "sitemap.xml",
        sitemap,
        {"sitemaps": sitemaps},
        name="django.contrib.sitemaps.views.sitemap",
    ),
]

urlpatterns += i18n_patterns(
    path('', include('Base.urls')),
    path('articles/', include('Viewer.urls')),
)

handler404 = "Base.views.page_not_found"

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'nyctaxifinder.views.home', name='home'),
    # url(r'^nyctaxifinder/', include('nyctaxifinder.foo.urls')),
    url(r'', include('main.urls')),
    url(r'', include('zipcode.urls')),
    url(r'', include('yellow_cab.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)

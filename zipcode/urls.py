from django.conf.urls.defaults import *

from zipcode.views import search

urlpatterns = patterns('',
  (r'^zipcode/search/(?P<zip>[a-zA-Z0-9]+)$', search)
)


from django.conf.urls.defaults import *

from yellow_cab.views import hack_search

urlpatterns = patterns('',
  (r'^yellow_cab/search/(?P<hack>[a-zA-Z0-9]+)/$', hack_search)
)

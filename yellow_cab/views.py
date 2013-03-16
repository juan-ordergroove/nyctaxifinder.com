# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader

def hack_search(request, hack):
    # template = loader.get_template('yellow_cab/search_result.html')
    # context = Context()
    return HttpResponse(hack)

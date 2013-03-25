# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader
from django.views.decorators.csrf import csrf_exempt

from yellow_cab.models import MedallionLicenseType
from paratransit.models import ParatransitBase
from commuter_van.models import CommuterVanBase
from community_car.models import CommunityCarBase
from black_car.models import BlackCarBase 
from limo.models import LimoBase 

@csrf_exempt
def search(request, zip):
    template = loader.get_template('zipcode/search_results.json')
    context = Context({
	'yellow_cabs': MedallionLicenseType.objects.filter(zip__icontains=zip)
	, 'ptcabs': ParatransitBase.objects.filter(zip__icontains=zip)
	, 'commuter_vans': CommuterVanBase.objects.filter(zip__icontains=zip)
	, 'community_cars': CommunityCarBase.objects.filter(zip__icontains=zip)
	, 'black_cars': BlackCarBase.objects.filter(zip__icontains=zip)
	, 'limos': LimoBase.objects.filter(zip__icontains=zip)
    })

    return HttpResponse(template.render(context), mimetype='text/javascript') 

# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader
from django.views.decorators.csrf import csrf_exempt

from yellow_cab.models import *

@csrf_exempt
def hack_search(request, hack):
    base_details = []
    driver_details = []
    vehicle_details = []

    medallions = Medallion.objects.filter(license_number__contains=hack)
    for med in medallions:
	m_types = MedallionLicenseType.objects.filter(agent_number=med.agent_number)
	for m_type in m_types:
	    base_details.append({
				'licensee_name': m_type.licensee_name
				, 'address': m_type.address
				, 'telephone': m_type.telephone
				, 'license_type': m_type.license_type
			    })
	
    
	vehicle_insurance = Insurance.objects.filter(license_number__contains=hack)
	for insurance in vehicle_insurance:
	    vehicle_details.append({
				'owner': insurance.vehicle_owner
				, 'insurance_code': insurance.code
				, 'insurance_policy_number': insurance.policy_number
				, 'vin': insurance.vin
				, 'type': med.vehicle_type
				, 'year': med.model_year
			    })
	
    drivers = DriversByMedallion.objects.filter(medallion_number__contains=hack)
    for driver in drivers:
	driver_details.append({'name': driver.driver_name, 'expiratoin': driver.license_expiration})

    template = loader.get_template('yellow_cab/search_results.json')
    context = Context({
		    'base_details': base_details
		    , 'driver_details': driver_details
		    , 'vehicle_details': vehicle_details
		})
    return HttpResponse(template.render(context), mimetype='text/javascript')

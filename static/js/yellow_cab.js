if (typeof yellow_cab == 'undefined') { yellow_cab = {}; }
(function(document) {
    var base_source = $('#yellow-base-details').html();
    var base_template = Handlebars.compile(base_source);

    var driver_source = $('#yellow-driver-details').html();
    var driver_template = Handlebars.compile(driver_source);

    var vehicle_source = $('#yellow-vehicle-details').html();
    var vehicle_template = Handlebars.compile(vehicle_source);

    yellow_cab.success = function(data) {
	var base_html = base_template({base_details: data.base_details});
	var driver_html = driver_template({driver_details: data.driver_details});
	var vehicle_html = vehicle_template({vehicle_details: data.vehicle_details});

	$('#yellowBaseContainer').html(base_html);
	$('#yellowDriverContainer').html(driver_html);
	$('#yellowVehicleContainer').html(vehicle_html);

	expandContent('#accordion-yellowType');
	expandContent('#accordion-yellowDriver');
	expandContent('#accordion-yellowVehicle');
	
	setTimeout(function() { $('#yellowSearching').slideUp('slow') }, 400);
    };
    
    yellow_cab.submit = function() {
	var hack = $('#licenseNumber').val();
	var hack_pattern = /^\d[A-Za-z]\d\d$/g;
	if (!hack) { alert('You must enter a medallion number to search for.'); return; }
	if (!hack_pattern.test(hack)) { alert('You must enter a valid medallion number to search for: i.e. 1A11'); return; }
	$('#yellowSearching').slideDown('slow');
        $.ajax({
            url: '/yellow_cab/search/'+encodeURIComponent(hack).toUpperCase(),
            success: yellow_cab.success,
	    dataType: 'json',
            error: generic_ajax_error
        });
    };
}(document));

/* Register functions with the dispatcher */
dispatcher['yellow_cab.submit'] = yellow_cab.submit;

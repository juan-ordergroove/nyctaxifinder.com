if (typeof zipsearch == 'undefined') { zipsearch = {}; }
(function(document) {
    var vtype_map = {
	yellow_cabs: "Yellow Cab",
	paratransit: "Paratransit",
	commuter_vans: "Commuter Van",
	community_cars: "Community Car",
	black_cars: "Black Car",
	limos: "Luxury Limo"
    };

    var zip_header_source = $('#zip-headers').html();
    var zip_header_template = Handlebars.compile(zip_header_source);
    
    var zip_source = $('#zip-details').html();
    var zip_template = Handlebars.compile(zip_source);

    zipsearch.success = function(data) {
	var zip_html = '';
	for (var vehicle_type in data) {
	    context = {vtype: vtype_map[vehicle_type], zip_details: data[vehicle_type]};
	    console.log(context);
	    zip_html += zip_template(context);
	}
	$('#zipCodeContainer').html(zip_header_template()+zip_html);

	setTimeout(function() { $('#zipSearching').slideUp('slow') }, 400);
    };
    
    zipsearch.submit = function() {
	var zip = $('#zipCode').val();
	var zip_pattern = /^\d\d\d\d\d$/g;
	if (!zip) { alert('You must enter a zip code to search for.'); return; }
	if (!zip_pattern.test(zip)) { alert('You must enter a valid zip code to search for, i.e. 55555'); return; }
	$('#zipSearching').slideDown('slow');
        $.ajax({
            url: '/zipcode/search/'+encodeURIComponent(zip),
            success: zipsearch.success,
	    dataType: 'json',
            error: generic_ajax_error
        });
    };
}(document));

/* Register functions with the dispatcher */
dispatcher['zipsearch.submit'] = zipsearch.submit;

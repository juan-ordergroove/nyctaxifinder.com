if (typeof yellow_cab == 'undefined') { yellow_cab = {}; }
(function(document){
    yellow_cab.success = function(data) { console.log(data); };
    
    yellow_cab.submit = function() {
        var hack = $('#licenseNumber').val();
        $.ajax({
            url: '/yellow_cab/search/'+hack,
            success: yellow_cab.success,
            error: generic_ajax_error
        });
    };
}(document));

/* Register functions with the dispatcher */
dispatcher['yellow_cab.submit'] = yellow_cab.submit;

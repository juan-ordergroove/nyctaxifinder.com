function generic_ajax_error(data) { alert('An unexpected error occurred.'); }

function expandContent(obj) {
    $(obj).next().slideDown('slow');
    $(obj).removeClass('ui-state-default');
    $(obj).addClass('ui-state-active');
}

function manageAccordions() {
    // $('h3').unbind('click', initAccordion);
    $('h3').click(initAccordion).next().hide();
    $('h3').mouseover(function() {
        $(this).addClass('ui-state-hover');
    });
    $('h3').mouseout(function() {
        $(this).removeClass('ui-state-hover');
    });
}

function initAccordion(evt) {
    var headerObj = null;
    if ($(evt.target).is('label')) { headerObj = $(evt.target).parent(); }
    else if ($(evt.target).is('a')) { headerObj = $(evt.target).parent().parent(); }
    else if ($(evt.target).is('span')) { headerobj = $(evt.target).parent().parent().parent(); }
    else { headerObj = $(evt.target); }

    $(headerObj).next().slideToggle('slow');
    if ($(headerObj).hasClass('ui-state-active')) {
        $(headerObj).removeClass('ui-state-active');
        $(headerObj).addClass('ui-state-default');
    }
    else {
        $(headerObj).removeClass('ui-state-default');
        $(headerObj).addClass('ui-state-active');
    }
    return false;
}

var dispatcher = {};
$(document).click(function(evt) {
    evt_fn = evt.target.getAttribute('data-event')
    if (evt_fn && dispatcher[evt_fn]) { dispatcher[evt_fn](); }
});

$(document).ready(function() {
    var loadingHtml = '<div align="center"><img src="/images/ajax-loader.gif"></div>';
    
    $('#tabs').tabs();
    $('#tabs').tabs('select', 0);

    $('#yellowDialog').dialog({
        bgiframe: true,
        autoOpen: false,
        modal: true,
        width: 550,
        resizable: false
    });

    $('#yellowTaxiHow').click(function() {
        $('#yellowDialog').dialog('open');
    });

    manageAccordions();
    
    // $('#yellowCabSubmit').click(function() {
    //     var licenseNumberVal = ($('#licenseNumber').val().match(/^\d[A-Za-z]\d\d$/) != null) ? $('#licenseNumber').val() : '';
    // 
    //     $('.yellowMedContainer').html(' - ' + licenseNumberVal);
    // 
    //     $('#yellowTypeContainer').html(loadingHtml);
    //     $('#yellowDriverContainer').html(loadingHtml);
    //     $('#yellowVehicleContainer').html(loadingHtml);
    //     $.get('yellowcab-query.php', { licenseNumber: licenseNumberVal },
    //         function(data) {
    //             expandContent($('#accordion-yellowType'));
    //             expandContent($('#accordion-yellowDriver'));
    // 
    //             setTimeout(function() {
    //                 var yellowData = eval('(' + data + ')');
    //                 $('#yellowTypeContainer').html(yellowData.licenseType);
    //                 $('#yellowDriverContainer').html(yellowData.drivers);
    //                 $('#yellowVehicleContainer').html(yellowData.insurance);
    //             }, 1000);
    //         }
    //     );
    // });    

    // $('#paratransitSubmit').click(function() {
    // var licensePlateVal = ($('#paraLicensePlate').val().match(/^(T\d+C)|(\d+LA)|(AMBU\d+)$/) != null) ? $('#paraLicensePlate').val() : '';
    // 
    // $('.paraLicenseContainer').html(' - ' + licensePlateVal);
    // 
    // $('#paraBaseContainer').html(loadingHtml);
    // $('#paraVehicleContainer').html(loadingHtml);
    // $.get('paratransit-query.php', { licensePlate: licensePlateVal },
    //     function(data) {
    //         expandContent($('#accordion-paraBase'));
    //         expandContent($('#accordion-paraVehicle'));
    // 
    //         setTimeout(function() {
    //         var paraData = eval('(' + data + ')');
    //         $('#paraBaseContainer').html(paraData.base);
    //         $('#paraVehicleContainer').html(paraData.vehicle);
    //         }, 1000);
    //     });
    // });

    // $('#fhvSubmit').click(function() {
    //     var licensePlateVal = $('#fhvLicensePlate').val();
    // 
    //     $('.fhvLicenseContainer').html(' - ' + licensePlateVal);
    // 
    //     $('#fhvBaseContainer').html(loadingHtml);
    //     $('#fhvVehicleContainer').html(loadingHtml);
    // 
    //     $.get('fhv-query.php', { licensePlate: licensePlateVal },
    //         function(data) {
    //             expandContent($('#accordion-fhvBase'));
    //             expandContent($('#accordion-fhvVehicle'));
    // 
    //             setTimeout(function() {
    //                 var fhvData = eval('(' + data + ')');
    //                 $('#fhvBaseContainer').html(fhvData.base);
    //                 $('#fhvVehicleContainer').html(fhvData.vehicle);
    //                 $('.fhvLicenseContainer').append(' - ' + fhvData.type);
    //             }, 1000);
    //         }
    //     );
    // });

    // $('#zipSubmit').click(function() { 
    //     var zipCodeVal = ($('#zipCode').val().match(/^\d\d\d\d\d$/) != null) ? $('#zipCode').val() : '';
    // 
    //     $('#zipCodeContainer').html(loadingHtml);
    //     $.get('zip-query.php', { zipCode: zipCodeVal },
    //         function (data) {
    //             setTimeout(function() {
    //                 $('#zipCodeContainer').html(data);
    //                 manageAccordions();
    //             }, 1000);
    //         }
    //     );
    // });

    $('#licenseNumber').keyup(function(e) {
        if(e.keyCode == 13) { $('#yellowCabSubmit').click(); } 
    });

    // $('#licensePlate').keyup(function(e) {
    //     if(e.keyCode == 13) { $('#paratransitSubmit').click(); }
    // });
    // 
    // $('#paraLicensePlate').keyup(function(e) {
    //     if(e.keyCode == 13) { $('#paratransitSubmit').click(); }
    // });
    // 
    // $('#zipCode').keyup(function(e) {
    //     if(e.keyCode == 13) { $('#zipSubmit').click(); }
    // });
});
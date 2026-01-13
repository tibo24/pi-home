$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("offline", onOffline, false);

    $('.sidenav').sidenav();
    $('.content').hide();
    $('#home').show();

    $('.sidenav a').click(function () {
        $('.content').hide();
        $('#' + $(this).data('show')).show();
        $('.sidenav').sidenav('close');
    });

    $("input").change(function() {
        var idName = $(this).attr('id');
        if($(this).is(":checked")) {
            updateData('/', idName, "True");
            $('#' + idName + 'img').attr('src', 'img/light_on.png');
        }
        else {
            updateData('/', idName, "False");
            $('#' + idName + 'img').attr('src', 'img/light_off.png');
        }
    });

});

function onDeviceReady() {
    console.log('Device is ready');
    fingerprintCheck();
};

function onResume(){
    fingerprintCheck();
}

function onOffline(){
    var storage = window.localStorage;
    var temperatuur = storage.getItem('temperatuur');
    console.log(temperatuur);
    drawgaugeChart(temperatuur);
}
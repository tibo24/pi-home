var config = {
    databaseURL: "https://cordova-project-fd4a6.firebaseio.com"
};
firebase.initializeApp(config);

var db = firebase.database();
var storage = window.localStorage;

function updateData(refLink, data, value){
    var dataUpdate = {};
    dataUpdate[data] = value;
    db.ref(refLink).update(dataUpdate);
};

var temperatuur = db.ref('/temperatuur');
temperatuur.on('value', function(snapshot) {
    storage.setItem('temperatuur', snapshot.val());
    drawgaugeChart(snapshot.val());
});

var lamp1Status = db.ref('/lamp1');
lamp1Status.on('value', function(snapshot) {
    if(snapshot.val() == 'True'){
        $('#lamp1').prop('checked', true);
        $('#lamp1img').attr('src', 'img/light_on.png');
    }
    else {
        $('#lamp1').prop('checked', false);
        $('#lamp1img').attr('src', 'img/light_off.png');
    }
});

var lamp2Status = db.ref('/lamp2');
lamp2Status.on('value', function(snapshot) {
    if(snapshot.val() == 'True'){
        $('#lamp2').prop('checked', true);
        $('#lamp2img').attr('src', 'img/light_on.png');
    }
    else {
        $('#lamp2').prop('checked', false);
        $('#lamp2img').attr('src', 'img/light_off.png');
    }
});

var tempUren = db.ref('/temper');
tempUren.on('value', function(snapshot) {
    var tempUrenArray = [];
    tempUrenArray[0] = ['Uur', 'Temp'];
    var teller = 0;
    snapshot.forEach(function (tempUurApart) {
        teller++;
        var datum = new Date(tempUurApart.key * 1000);
        tempUrenArray[teller] =  [datum, Number(tempUurApart.val())];
        storage.setItem('temp' + String(teller), tempUurApart.val());
    });
    drawlineChart(tempUrenArray);
});

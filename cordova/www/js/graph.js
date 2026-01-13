google.charts.load('current', {packages: ['corechart', 'gauge']});
google.charts.setOnLoadCallback(drawlineChart);
google.charts.setOnLoadCallback(drawgaugeChart);

function drawlineChart(data) {
    // Define the chart to be drawn.
    var breedte = Math.round($(window).width() / 1.16);
    console.log(data);

    var data = new google.visualization.arrayToDataTable(data);
    console.log(data);
    var options = {
        width: breedte,
        curveType: 'function',
        legend: 'none',
        hAxis: {
            title: 'Tijd (u)',
            format: 'h'
            // format: 'm' for testing with minutes instead of hours
        },
        vAxis: {
            title: "Temperatuur (C)",
            ticks: [10,15,20,25,30]
        }
    };
    // Instantiate and draw the chart.
    var chart = new google.visualization.LineChart($('#tempGraph')[0]);
    chart.draw(data, options);
};

function drawgaugeChart(temperatuur) {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['', Number(temperatuur)]
    ]);
    var options = {
        yellowColor: '#00a8ff',
        yellowFrom: 0, yellowTo: 10,
        greenFrom: 10, greenTo: 30,
        redFrom: 30, redTo: 40,
        minorTicks: 5,
        majorTicks: ['0','','10','','20','','30','','40'],
        min: 0,
        max: 40
    };
    var chart = new google.visualization.Gauge($('#tempGauge')[0]);
    chart.draw(data, options);
}
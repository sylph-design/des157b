(function () {
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.752475, -122.443925], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // L.marker([51.5, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    //     .openPopup();


    var polygon = L.polygon([
        [37.790018, -122.407004],
        [37.796377, -122.410413],
        [37.798564, -122.401600],
        [37.791680, -122.399515]
    ]).addTo(map);

    polygon.bindPopup("This is Chinatown!");

    var marker = L.marker([37.801073, -122.398335]).addTo(map);

    marker.bindPopup("This is the Exploratorium!");

    var circle = L.circle([37.798472, -122.465380], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
    }).addTo(map);

    circle.bindPopup("This is Golden Gate Park!");


}());
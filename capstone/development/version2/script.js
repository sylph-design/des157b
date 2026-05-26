(function () {

    'use strict';
    var map = L.map('map').setView([33.9, -118.07], 10);
    let options ={
                     "mapId" : "map",
                     "googleTile": false,
                     "mapCenter" : {
                         "lat": 33.9,
                         "lng": -118.07
                     },
                    "floatPanel": true,
                    "tripgoApiKey": "2ffb9cdfc1b2d305f9145d692aaddc6d"
                 }

    L.tripgoRouting.mapLayer.initialize(options); 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


})();
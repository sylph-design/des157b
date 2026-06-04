(function () {

    'use strict';
    var map = L.map('map').setView([33.9, -118.07], 11);
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

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let homeToWork = [
        [33.980001, -118.300489],
        [33.982390, -118.300352],
        [33.982285, -118.292154],
        [33.981863, -118.290403],
        [33.982125, -118.287056],
        [33.995012, -118.287185],
        [33.995036, -118.278292],
        [34.011981, -118.278391],
        [34.039649, -118.259025],
        [34.044981, -118.253554]
    ]

    let polyline = L.polyline(homeToWork, {color: 'blue', weight: 5}).addTo(map);
    let homeMarker = L.marker([33.980001, -118.300489]).addTo(map);
    let workMarker = L.marker([34.044981, -118.253554]).addTo(map);


    let addressInputA = document.querySelector("#addressInputA");
    let addressInputB = document.querySelector("#addressInputB");
    let findRoutesButton = document.querySelector("#findRoutesButton");
    let locationSearchOverlay = document.querySelector("#locationSearchOverlay");


    locationSearchOverlay.addEventListener("submit", function (event) {
        event.preventDefault();
        document.querySelector("#map").style.filter = "none";
        locationSearchOverlay.style.display = "none";
        document.querySelector("#sidebar").style.display = "block";
        setTimeout(() => {
            document.querySelector("#redRoadPopup").className = "";
            setTimeout(() => {
                document.querySelector("#orangeRoadPopup").className = "";
                map.fitBounds(polyline.getBounds());
                document.querySelector("#nextButtonMap").className = "";
            }, 500);
        }, 500);
    });

    document.querySelector("#hideRedPopup").addEventListener("click", function () {
        document.querySelector("#redRoadPopup").className = "hidden";
    });

    document.querySelector("#hideOrangePopup").addEventListener("click", function () {
        document.querySelector("#orangeRoadPopup").className = "hidden";
    });

    document.querySelector("#nextButtonMap").addEventListener("click", function () {
        document.querySelector("#mapScreen").className = "hidden";
        document.querySelector("#storyScreen").className = "";
        document.querySelector("#nextButtonStory").className = "";
    });

    document.querySelector("#nextButtonStory").addEventListener("click", function () {
        document.querySelector("#storyScreen").className = "hidden";
        document.querySelector("#newsScreen").className = "";
    });


})();
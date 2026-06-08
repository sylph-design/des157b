(function () {

    'use strict';
    var map = L.map('map').setView([33.9, -118.07], 11);
    let options = {
        "mapId": "map",
        "googleTile": false,
        "mapCenter": {
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

    let pinIcon = L.icon({
        iconUrl: "assets/mapPin.svg",
        iconSize: [50, 50],
        iconAnchor: [25, 45]
    });

    let questionIcon = L.icon({
        iconUrl: "assets/questionmark.svg",
        iconSize: [50, 50]
    });

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
    ];

    let workToHome = [
        [34.044981, -118.253554],
        [34.039649, -118.259025],
        [34.011981, -118.278391],
        [33.995036, -118.278292],
        [33.995012, -118.287185],
        [33.982125, -118.287056],
        [33.981863, -118.290403],
        [33.982285, -118.292154],
        [33.982390, -118.300352],
        [33.980001, -118.300489],
    ];

    let homeToStore = [
        [33.980001, -118.300489],
        [34.018380, -118.300122],
        [34.018463, -118.313945],
        [34.018876, -118.317766],
        [34.047123, -118.317737],
        [34.052059, -118.315561],
        [34.053856, -118.314199],
        [34.063300, -118.314139],
        [34.063514, -118.309849]
    ];

    let storeToHome = [
        [34.063514, -118.309849],
        [34.063300, -118.314139],
        [34.053856, -118.314199],
        [34.052059, -118.315561],
        [34.047123, -118.317737],
        [34.018876, -118.317766],
        [34.018463, -118.313945],
        [34.018380, -118.300122],
        [33.980001, -118.300489]
    ];

    let homeToWorkAnim = L.motion.polyline(homeToWork, { color: 'blue' }, { auto: true, speed: 5000, easing: L.Motion.Ease.easeInOutQuad },
        {
            icon: L.divIcon({ html: "<i class='fa-solid fa-car-side fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24) }),
            removeOnEnd: true
        }).motionDuration(5000);

    let workToHomeAnim = L.motion.polyline(workToHome, { color: 'blue' }, { auto: false, speed: 5000, easing: L.Motion.Ease.easeInOutQuad },
        {
            icon: L.divIcon({ html: "<i class='fa-solid fa-car-side fa-2x fa-flip-horizontal' aria-hidden='true'></i>", iconSize: L.point(27.5, 24) })
        });

    let homeToStoreAnim = L.motion.polyline(homeToStore, { color: 'blue' }, { auto: true, speed: 5000, easing: L.Motion.Ease.easeInOutQuad },
        {
            icon: L.divIcon({ html: "<i class='fa-solid fa-car-side fa-2x fa-flip-horizontal' aria-hidden='true'></i>", iconSize: L.point(27.5, 24) }),
            removeOnEnd: true
        }).motionDuration(5000);

    let storeToHomeAnim = L.motion.polyline(storeToHome, { color: 'blue' }, { auto: false, speed: 5000, easing: L.Motion.Ease.easeInOutQuad },
        {
            icon: L.divIcon({ html: "<i class='fa-solid fa-car-side fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24) })
        });

    let polyline = L.polyline(homeToWork, { color: 'blue', weight: 5 }).addTo(map);
    let polyline2;
    let homeMarker = L.marker([33.980001, -118.300489], { icon: pinIcon }).addTo(map);
    let workMarker = L.marker([34.044981, -118.253554], { icon: pinIcon }).addTo(map);


    let addressInputA = document.querySelector("#addressInputA");
    let addressInputB = document.querySelector("#addressInputB");
    let findRoutesButton = document.querySelector("#findRoutesButton");
    let locationSearchOverlay = document.querySelector("#locationSearchOverlay");

    let storyText1 = "There was a lot of traffic today. Even more than usual. Apparently there was a big accident on the freeway and it took all day to clear. It's late when you get back home.";

    let screenOn = false;
    let currentChapter = 1;
    let textPosition = 0;
    let tabletNext = false;


    locationSearchOverlay.addEventListener("submit", function (event) {
        event.preventDefault();
        document.querySelector("#map").style.filter = "none";
        locationSearchOverlay.style.display = "none";
        document.querySelector("#sidebar").style.display = "block";
        setTimeout(() => {
            document.querySelector("#redRoadPopup").className = "";
            setTimeout(() => {
                document.querySelector("#orangeRoadPopup").className = "";

                if (currentChapter == 1) {
                    map.fitBounds(polyline.getBounds());
                } else if (currentChapter == 4) {
                    map.fitBounds(polyline2.getBounds());
                }

                setTimeout(() => {
                    document.querySelector("#mapButtonArea").className = "";
                }, 1000);
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
        if (currentChapter == 1) {
            let seq = L.motion.seq([homeToWorkAnim]).addTo(map);
            seq.addLayer(workToHomeAnim, true);
            document.querySelector("#mapButtonArea").className = "hidden";
            setTimeout(function () {
                let questionMarker = L.marker([33.980001, -118.300489], { icon: questionIcon }).addTo(map);
                questionMarker.on("click", function () {
                    currentChapter = 2;
                    document.querySelector("#transitionScreen").className = "fadeToBlack";
                    setTimeout(function () {
                        document.querySelector("#transitionScreen").className = "hidden";
                        chapterCheck();
                    }, 1000);
                });
            }, 12000);
        } else if (currentChapter == 4) {
            let seq = L.motion.seq([homeToStoreAnim]).addTo(map);
            seq.addLayer(storeToHomeAnim, true);
            // let seq2 = L.motion.seq([homeToStoreAnim]).addTo(map);
            // seq2.addLayer(storeToHomeAnim, true);
            document.querySelector("#mapButtonArea").className = "hidden";
            setTimeout(function () {
                let questionMarker2 = L.marker([33.980001, -118.300489], { icon: questionIcon }).addTo(map);
                questionMarker2.on("click", function () {
                    currentChapter = 5;
                    document.querySelector("#transitionScreen").className = "fadeToBlack";
                    setTimeout(function () {
                        document.querySelector("#transitionScreen").className = "hidden";
                        chapterCheck();
                    }, 1000);
                });
            }, 12000);
        }
    });

    document.querySelector("#nextButtonStory").addEventListener("click", function () {
        currentChapter = 3;
        chapterCheck();
    });

    document.querySelector("#tabletButton").addEventListener("click", function () {
        if (screenOn == false) {
            document.querySelector("#offScreen").className = "hidden";
            document.querySelector("#tablet").className = "";
            void document.querySelector("#tablet").offsetWidth;
            document.querySelector("#tablet").className = "wiggle";
            screenOn = true;
        } else {
            document.querySelector("#offScreen").className = "";
            document.querySelector("#tablet").className = "";
            void document.querySelector("#tablet").offsetWidth;
            document.querySelector("#tablet").className = "wiggle";
            screenOn = false;
        }
        if (tabletNext == false) {
            tabletNext = true;
            setTimeout(function () {
                document.querySelector("#newsButtonArea").className = "";
                document.querySelector("#nextButtonNews").className = "fadeInDown";
            }, 5000);
        }
    });

    document.querySelector("#nextButtonNews").addEventListener("click", function () {
        currentChapter = 4;
        chapterCheck();
    });

    function chapterCheck() {
        if (currentChapter == 1) {

        } else if (currentChapter == 2) {
            document.querySelector("#mapScreen").className = "hidden";
            document.querySelector("#storyScreen").className = "";
            document.querySelector("#nextButtonStory").className = "";
            document.querySelector("#storyImg").className = "fadeInUp";
            typeWriter(storyText1);
        } else if (currentChapter == 3) {
            document.querySelector("#storyScreen").className = "hidden";
            document.querySelector("#newsScreen").className = "";
            document.querySelector("#newsButtonArea").className = "hidden";
        } else if (currentChapter == 4) {
            document.querySelector("#newsScreen").className = "hidden";
            document.querySelector("#newsButtonArea").className = "hidden";
            document.querySelector("#mapScreen").className = "";
            document.querySelector("#map").style.filter = "blur(20px)";
            locationSearchOverlay.style.display = "block";
            document.querySelector("#sidebar").style.display = "none";
            document.querySelector("#redRoadPopup").className = "hidden";
            document.querySelector("#orangeRoadPopup").className = "hidden";
            if (map !== undefined && map !== null) {
                map.remove();
            }
            map = L.map('map').setView([33.9, -118.07], 11);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            homeMarker = L.marker([33.980001, -118.300489], { icon: pinIcon }).addTo(map);
            let storeMarker = L.marker([34.063514, -118.309849], { icon: pinIcon }).addTo(map);;
            polyline2 = L.polyline(homeToStore, { color: 'blue', weight: 5 }).addTo(map);

            document.querySelector("#locationSearchOverlay").innerHTML = `
                <h1>What will it take to get to the store today?</h1>
                <label>Location A</label>
                <br><select id="addressInputA" required>
                    <option value=""></option>
                    <option value="a">[HOME] 6525 Normandie Ave, Los Angeles, CA 90044</option>
                </select>
                <br><label>Location B</label>
                <br><select id="addressInputB" required>
                    <option value=""></option>
                    <option value="b">[STORE] 621 S Western Ave, Los Angeles, CA 90005</option>
                </select>
                <div id="buttonAlignment">
                    <button id="findRoutesButton" type="submit">Find Routes</button>
                </div>
            `;

            document.querySelector("#sidebar").innerHTML = `
                <i class="fa-solid fa-car fa-4x" id="sidebarCarIcon"></i>
                <div id="routeLocations">
                    <h5>Location A</h5>
                    <p>6525 Normandie Ave, Los Angeles, CA 90044</p>
                    <h5>Location B</h5>
                    <p>621 S Western Ave, Los Angeles, CA 90005</p>
                </div>
                <div id="routeOption1">
                    <h2>Best Route</h2>
                    <p>7 Miles</p>
                    <p>2800g of CO2</p>
                    <p>Cost: $12.60</p>
                    <p>Est. Time: 25 minutes</p>
                </div>`;
        } else if (currentChapter == 5) {

        } else if (currentChapter == 6) {

        } else if (currentChapter == 7) {

        } else if (currentChapter == 8) {

        } else if (currentChapter == 9) {

        } else if (currentChapter == 10) {

        } else if (currentChapter == 11) {

        }
    }

    function typeWriter(text) {
        if (textPosition < text.length) {
            document.querySelector("#storyText").innerHTML += text.charAt(textPosition);
            textPosition++;
            console.log("bruh");
            setTimeout(function () {
                typeWriter(text);
            }, 50);
        }
    }

})();
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

    let homeToWork2 = [
        [33.980001, -118.300489],
        [33.982360, -118.300352],
        [33.982376, -118.280104],
        [34.016441, -118.280909],
        [34.027898, -118.274628],
        [34.042590, -118.273151],
        [34.051686, -118.260345],
        [34.046606, -118.252012],
        [34.044981, -118.253554]
    ]

    let workToHome2 = [
        [34.044981, -118.253554],
        [34.046606, -118.252012],
        [34.051686, -118.260345],
        [34.042590, -118.273151],
        [34.027898, -118.274628],
        [34.016441, -118.280909],
        [33.982376, -118.280104],
        [33.982360, -118.300352],
        [33.980001, -118.300489]
    ]

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

    let homeToSchool = [
        [33.980001, -118.300489],
        [33.989114, -118.300159],
        [33.988848, -118.354134],
        [33.987509, -118.363015],
        [33.988002, -118.375114],
        [33.988903, -118.378463],
        [33.987335, -118.395326],
        [33.989223, -118.399954],
        [34.072060, -118.465370],
        [34.073272, -118.465788],
        [34.074123, -118.463808],
        [34.073120, -118.461386],
        [34.074589, -118.458791],
        [34.074251, -118.457714],
        [34.076714, -118.452897]
    ];

    let schoolToHome = [
        [34.076714, -118.452897],
        [34.074251, -118.457714],
        [34.074589, -118.458791],
        [34.073120, -118.461386],
        [34.074123, -118.463808],
        [34.073272, -118.465788],
        [34.072060, -118.465370],
        [33.989223, -118.399954],
        [33.987335, -118.395326],
        [33.988903, -118.378463],
        [33.988002, -118.375114],
        [33.987509, -118.363015],
        [33.988848, -118.354134],
        [33.989114, -118.300159],
        [33.980001, -118.300489]
    ];

    let homeToHospital = [
        [33.980001, -118.300489],
        [33.945488, -118.300266],
        [33.945487, -118.344019],
        [33.949080, -118.344034],
        [33.949102, -118.347496],
        [33.950055, -118.347408],
        [33.950050, -118.348235]
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

    let homeToSchoolAnim = L.motion.polyline(homeToSchool, { color: 'blue' }, { auto: true, speed: 5000, easing: L.Motion.Ease.easeInOutQuad },
        {
            icon: L.divIcon({ html: "<i class='fa-solid fa-car-side fa-2x fa-flip-horizontal' aria-hidden='true'></i>", iconSize: L.point(27.5, 24) }),
            removeOnEnd: true
        }).motionDuration(8000);

    let schoolToHomeAnim = L.motion.polyline(schoolToHome, { color: 'blue' }, { auto: false, speed: 5000, easing: L.Motion.Ease.easeInOutQuad },
        {
            icon: L.divIcon({ html: "<i class='fa-solid fa-car-side fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24) })
        });

    let homeToWorkAnim2 = L.motion.polyline(homeToWork2, { color: 'green' }, { auto: true, speed: 5000, easing: L.Motion.Ease.easeInOutQuad },
        {
            icon: L.divIcon({ html: "<i class='fa-solid fa-bus-side fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24) }),
            removeOnEnd: true
        }).motionDuration(4000);

    let workToHomeAnim2 = L.motion.polyline(workToHome2, { color: 'green' }, { auto: false, speed: 5000, easing: L.Motion.Ease.easeInOutQuad },
        {
            icon: L.divIcon({ html: "<i class='fa-solid fa-bus-side fa-2x fa-flip-horizontal' aria-hidden='true'></i>", iconSize: L.point(27.5, 24) })
        }).motionDuration(4000);

    let polyline = L.polyline(homeToWork, { color: 'blue', weight: 5 }).addTo(map);
    let polyline2;
    let polyline3;
    let polyline4;
    let polyline5;
    let homeMarker = L.marker([33.980001, -118.300489], { icon: pinIcon }).addTo(map);
    let workMarker = L.marker([34.044981, -118.253554], { icon: pinIcon }).addTo(map);


    let addressInputA = document.querySelector("#addressInputA");
    let addressInputB = document.querySelector("#addressInputB");
    let findRoutesButton = document.querySelector("#findRoutesButton");
    let locationSearchOverlay = document.querySelector("#locationSearchOverlay");

    let storyText1 = "There was a lot of traffic today. Even more than usual. Apparently there was a big accident on the freeway and it took all day to clear. It's late when you get back home.";
    let storyText2 = "While driving, your check engine light turns on. You have to take your car to a mechanic, which costs you $150. One of the essential sensors has burned out. It costs you $1,000 to replace.";
    let storyText3 = "Smog and ashes make the sky a gray-red. Even before the wildfires, the pollution in the air has been off the charts. It's hard to breathe. You try to stay indoors.";
    let storyText4 = "Your heart starts beating irregularly. You're getting dizzy and it's hard to breathe."
    let storyText5 = "While taking the train, somebody compliments your outfit. It makes getting to work 5 minutes late feel not so bad.";

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
            if (currentChapter == 1) {
                document.querySelector("#redRoadPopup").className = "";
            }
            setTimeout(() => {
                if (currentChapter == 1) {
                    document.querySelector("#orangeRoadPopup").className = "";
                }

                if (currentChapter == 1) {
                    map.fitBounds(polyline.getBounds());
                } else if (currentChapter == 4) {
                    map.fitBounds(polyline2.getBounds());
                } else if (currentChapter == 7) {
                    map.fitBounds(polyline3.getBounds());
                } else if (currentChapter == 11) {
                    map.fitBounds(polyline4.getBounds());
                } else if (currentChapter == 13) {
                    map.fitBounds(polyline5.getBounds());
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
        } else if (currentChapter == 7) {
            let seq = L.motion.seq([homeToSchoolAnim]).addTo(map);
            seq.addLayer(schoolToHomeAnim, true);
            document.querySelector("#mapButtonArea").className = "hidden";
            setTimeout(function () {
                let questionMarker3 = L.marker([33.980001, -118.300489], { icon: questionIcon }).addTo(map);
                questionMarker3.on("click", function () {
                    currentChapter = 8;
                    document.querySelector("#transitionScreen").className = "fadeToBlack";
                    setTimeout(function () {
                        document.querySelector("#transitionScreen").className = "hidden";
                        chapterCheck();
                    }, 1000);
                });
            }, 23000);
        } else if (currentChapter == 11) {
            document.querySelector("#mapPopups").innerHTML = `
                <div>
                    <div class="popup">
                        <p>You can't afford the trip.</p>
                    </div>
                </div>
            `;
            document.querySelector("#mapButtonArea").className = "hidden";
            setTimeout(function () {
                document.querySelector("#mapPopups").innerHTML += `
                    <div>
                        <div class="popup">
                            <p>You can't afford the ambulance either.</p>
                        </div>
                    </div>
                `;
                setTimeout(function () {
                    document.querySelector("#mapPopups").innerHTML += `
                        <div>
                            <div class="popup">
                                <p>You decide to try and sleep it off...</p>
                            </div>
                        </div>
                    `;
                    setTimeout(function () {
                        document.querySelector("#transitionScreen").className = "fadeToBlackReal";
                        document.querySelector("#mapPopups").innerHTML = "";
                        currentChapter = 12;
                        chapterCheck();
                    }, 3000);
                }, 3000);
            }, 3000);
        } else if (currentChapter == 13) {
            let seq = L.motion.seq([homeToWorkAnim2]).addTo(map);
            seq.addLayer(workToHomeAnim2, true);
            document.querySelector("#mapButtonArea").className = "hidden";
            setTimeout(function () {
                let questionMarker4 = L.marker([33.980001, -118.300489], { icon: questionIcon }).addTo(map);
                questionMarker4.on("click", function () {
                    currentChapter = 14;
                    document.querySelector("#transitionScreen").className = "fadeToBlack";
                    setTimeout(function () {
                        document.querySelector("#transitionScreen").className = "hidden";
                        chapterCheck();
                    }, 1000);
                });
            }, 9000);
        }
    });

    document.querySelector("#nextButtonStory").addEventListener("click", function () {
        if (currentChapter == 2) {
            currentChapter = 3;
        } else if (currentChapter == 5) {
            currentChapter = 6;
        } else if (currentChapter == 8) {
            currentChapter = 9;
        } else if (currentChapter == 14) {
            currentChapter = 15;
        }
        chapterCheck();
    });

    document.querySelector("#nextButtonStoryHeart").addEventListener("click", function () {
        if (currentChapter == 10) {
            currentChapter = 11;
        }
        chapterCheck();
    });

    addTabletButton();

    document.querySelector("#nextButtonNews").addEventListener("click", function () {
        if (currentChapter == 3) {
            currentChapter = 4;
        } else if (currentChapter == 6) {
            currentChapter = 7;
        } else if (currentChapter == 15) {
            currentChapter = 16;
        }
        chapterCheck();
    });

    document.querySelector("#questionButton").addEventListener("click", function () {
        if (currentChapter == 9) {
            currentChapter = 10;
        }
        chapterCheck();
    });

    document.querySelector("#differentButton").addEventListener("click", function () {
        if (currentChapter == 12) {
            currentChapter = 13;
        }
        chapterCheck();
    });

    function chapterCheck() {
        if (currentChapter == 1) {

        } else if (currentChapter == 2) {
            document.querySelector("#mapScreen").className = "hidden";
            document.querySelector("#storyScreen").className = "";
            document.querySelector("#nextButtonStory").className = "";
            document.querySelector("#mapPopups").innerHTML = "";
            document.querySelector("#buttonHeartArea").className = "hidden";
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
            document.querySelector("#mapScreen").className = "hidden";
            document.querySelector("#storyScreen").className = "";
            document.querySelector("#nextButtonStory").className = "";

            document.querySelector("#storyImg").style.backgroundImage = "url()";
            document.querySelector("#storyText").innerHTML = "";

            document.querySelector("#storyImg").className = "fadeInUp";
            textPosition = 0;
            typeWriter(storyText2);
        } else if (currentChapter == 6) {
            document.querySelector("#storyScreen").className = "hidden";
            document.querySelector("#newsScreen").className = "";
            document.querySelector("#newsButtonArea").className = "hidden";
            document.querySelector("#offScreen").className = "";
            document.querySelector("#tablet").className = "";
            screenOn = false;
            tabletNext = false;

            document.querySelector("#tablet").innerHTML = `
                <div id="offScreen"></div>
                <button id="tabletButton"></button>
                <div id="dateTime">
                    <p>February 5th, 2025</p>
                    <p>6:07PM</p>
                </div>
                <div id="weather">
                    <div id="weatherToday">
                        <i class="fa-solid fa-cloud fa-5x"></i>
                        <div id="weatherInfo">
                            <p>55°</p>
                            <p>AQI 61</p>
                        </div>
                    </div>
                    <div id="weatherWeek">
                        <div id="weekDate">
                            <p>2/6</p>
                            <p>2/7</p>
                            <p>2/8</p>
                            <p>2/9</p>
                            <p>2/10</p>
                        </div>
                        <div id="weekIcon">
                            <i class="fa-solid fa-cloud fa-2x"></i>
                            <i class="fa-solid fa-cloud fa-2x"></i>
                            <i class="fa-solid fa-cloud fa-2x"></i>
                            <i class="fa-solid fa-cloud fa-2x"></i>
                            <i class="fa-solid fa-cloud fa-2x"></i>
                        </div>
                        <div id="weekTemp">
                            <p>57°</p>
                            <p>60°</p>
                            <p>54°</p>
                            <p>51°</p>
                            <p>52°</p>
                        </div>
                        <div id="weekAQI">
                            <p>AQI 57</p>
                            <p>AQI 55</p>
                            <p>AQI 62</p>
                            <p>AQI 58</p>
                            <p>AQI 56</p>
                        </div>
                    </div>
                </div>
                <div id="bankAccount">
                    <h3>4920 Checking Acc.</h3>
                    <h4>$181</h4>
                    <p>Balance</p>
                </div>
                <div id="steps">
                    <p id="stepsTaken">2,194</p>
                    <p id="maxSteps">/ 10,000</p>
                    <i class="fa-solid fa-shoe-prints fa-rotate-270 fa-2x"></i>
                </div>
                <div id="gasPrice">
                    <i class="fa-solid fa-gas-pump fa-2x"></i>
                    <p>$4.60/gal</p>
                </div>
                <div id="newsArticle">
                    <h3>AUTO INSURANCE PREMIUMS RISE</h3>
                    <p>Insurance companies are raising premiums across the board. Many cite higher rates of risky driving and litigation costs for the change.</p>
                </div>
            `;
            addTabletButton();
        } else if (currentChapter == 7) {
            document.querySelector("#newsScreen").className = "hidden";
            document.querySelector("#newsButtonArea").className = "hidden";
            document.querySelector("#mapScreen").className = "";
            document.querySelector("#map").style.filter = "blur(20px)";
            locationSearchOverlay.style.display = "block";
            document.querySelector("#sidebar").style.display = "none";
            if (map !== undefined && map !== null) {
                map.remove();
            }
            map = L.map('map').setView([33.9, -118.07], 11);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            homeMarker = L.marker([33.980001, -118.300489], { icon: pinIcon }).addTo(map);
            let schoolMarker = L.marker([34.076714, -118.452897], { icon: pinIcon }).addTo(map);;
            polyline3 = L.polyline(homeToSchool, { color: 'blue', weight: 5 }).addTo(map);

            document.querySelector("#locationSearchOverlay").innerHTML = `
                <h1>What will it take to get to school today?</h1>
                <label>Location A</label>
                <br><select id="addressInputA" required>
                    <option value=""></option>
                    <option value="a">[HOME] 6525 Normandie Ave, Los Angeles, CA 90044</option>
                </select>
                <br><label>Location B</label>
                <br><select id="addressInputB" required>
                    <option value=""></option>
                    <option value="b">[SCHOOL] 100 De Neve Dr, Los Angeles, CA 90024</option>
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
                    <p>100 De Neve Dr, Los Angeles, CA 90024</p>
                </div>
                <div id="routeOption1">
                    <h2>Best Route</h2>
                    <p>15.3 Miles</p>
                    <p>6120g of CO2</p>
                    <p>Cost: $30.60</p>
                    <p>Est. Time: 24 minutes</p>
                </div>`;

        } else if (currentChapter == 8) {
            document.querySelector("#mapScreen").className = "hidden";
            document.querySelector("#storyScreen").className = "";
            document.querySelector("#nextButtonStory").className = "";

            document.querySelector("#storyImg").style.backgroundImage = "url()";
            document.querySelector("#storyText").innerHTML = "";

            document.querySelector("#storyImg").className = "fadeInUp";
            textPosition = 0;
            typeWriter(storyText3);
        } else if (currentChapter == 9) {
            document.querySelector("#storyScreen").className = "hidden";
            document.querySelector("#newsScreen").className = "";
            document.querySelector("#newsButtonArea").className = "hidden";
            document.querySelector("#offScreen").className = "";
            document.querySelector("#tablet").className = "";
            screenOn = false;
            tabletNext = false;

            document.querySelector("#tablet").innerHTML = `
                <div id="offScreen"></div>
                <button id="tabletButton"></button>
                <div id="dateTime">
                    <p>July 10th, 2026</p>
                    <p>11:20PM</p>
                </div>
                <div id="weather">
                    <div id="weatherToday">
                        <i class="fa-solid fa-smog fa-5x"></i>
                        <div id="weatherInfo">
                            <p>98°</p>
                            <p>AQI 173</p>
                        </div>
                    </div>
                    <div id="weatherWeek">
                        <div id="weekDate">
                            <p>7/11</p>
                            <p>7/12</p>
                            <p>7/13</p>
                            <p>7/14</p>
                            <p>7/15</p>
                        </div>
                        <div id="weekIcon">
                            <i class="fa-solid fa-smog fa-2x"></i>
                            <i class="fa-solid fa-smog fa-2x"></i>
                            <i class="fa-solid fa-smog fa-2x"></i>
                            <i class="fa-solid fa-smog fa-2x"></i>
                            <i class="fa-solid fa-smog fa-2x"></i>
                        </div>
                        <div id="weekTemp">
                            <p>105°</p>
                            <p>108°</p>
                            <p>114°</p>
                            <p>113°</p>
                            <p>116°</p>
                        </div>
                        <div id="weekAQI">
                            <p>AQI 194</p>
                            <p>AQI 210</p>
                            <p>AQI 198</p>
                            <p>AQI 182</p>
                            <p>AQI 191</p>
                        </div>
                    </div>
                </div>
                <div id="bankAccount">
                    <h3>4920 Checking Acc.</h3>
                    <h4>$12</h4>
                    <p>Balance</p>
                </div>
                <div id="steps">
                    <p id="stepsTaken">533</p>
                    <p id="maxSteps">/ 10,000</p>
                    <i class="fa-solid fa-shoe-prints fa-rotate-270 fa-2x"></i>
                </div>
                <div id="gasPrice">
                    <i class="fa-solid fa-gas-pump fa-2x"></i>
                    <p>$6.30/gal</p>
                </div>
                <div id="newsArticle">
                    <h3>FIRES ERUPT IN THE LA HILLS</h3>
                    <p>Over 1,500 acres surrounding LA are currently in flames. Fire department suggests for nearby homes to prepare for evacuation.</p>
                </div>
            `;

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
                        document.querySelector("#newsScreen").className = "blur";
                        setTimeout(function () {
                            document.querySelector("#questionButton").className = "";
                        }, 5000);
                    }, 10000);
                }
            });
        } else if (currentChapter == 10) {
            document.querySelector("#newsScreen").className = "hidden";
            document.querySelector("#questionButton").className = "hidden";
            document.querySelector("#storyScreen").className = "";
            document.querySelector("#nextButtonStoryHeart").className = "";
            document.querySelector("#buttonHeartArea").className = "";

            document.querySelector("#storyImg").style.backgroundImage = "url()";
            document.querySelector("#storyText").innerHTML = "";

            document.querySelector("#storyImg").className = "fadeInUp";
            textPosition = 0;
            typeWriter(storyText4);
        } else if (currentChapter == 11) {

            document.querySelector("#storyScreen").className = "hidden";
            document.querySelector("#nextButtonStoryHeart").className = "hidden";
            document.querySelector("#mapScreen").className = "";
            document.querySelector("#map").style.filter = "blur(20px)";
            locationSearchOverlay.style.display = "block";
            document.querySelector("#sidebar").style.display = "none";
            if (map !== undefined && map !== null) {
                map.remove();
            }
            map = L.map('map').setView([33.9, -118.07], 11);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            homeMarker = L.marker([33.980001, -118.300489], { icon: pinIcon }).addTo(map);
            let hospitalMarker = L.marker([33.950050, -118.348235], { icon: pinIcon }).addTo(map);;
            polyline4 = L.polyline(homeToHospital, { color: 'blue', weight: 5 }).addTo(map);

            document.querySelector("#locationSearchOverlay").innerHTML = `
                <h1>What will it take to get to the hospital today?</h1>
                <label>Location A</label>
                <br><select id="addressInputA" required>
                    <option value=""></option>
                    <option value="a">[HOME] 6525 Normandie Ave, Los Angeles, CA 90044</option>
                </select>
                <br><label>Location B</label>
                <br><select id="addressInputB" required>
                    <option value=""></option>
                    <option value="b">[HOSPITAL] 555 E Hardy St, Inglewood, CA 90301</option>
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
                    <p>555 E Hardy St, Inglewood, CA 90301</p>
                </div>
                <div id="routeOption1">
                    <h2>Best Route</h2>
                    <p>5.4 Miles</p>
                    <p>2160g of CO2</p>
                    <p>Cost: $13.07</p>
                    <p>Est. Time: 15 minutes</p>
                </div>`;

        } else if (currentChapter == 12) {
            setTimeout(function () {
                document.querySelector("#mapScreen").className = "hidden";
                document.querySelector("#transitionScreen").className = "hidden";
                document.querySelector("#dataScreen").className = "";
                document.querySelector("main").className = "hidden";
            }, 2000);
            for (let i = 0; i < 110; i++) {
                document.querySelector("#peopleGrid").innerHTML += `
                <i class="fa-solid fa-person fa-2x"></i>
                `;
            }

        } else if (currentChapter == 13) {
            document.querySelector("#dataScreen").className = "hidden";
            document.querySelector("main").className = "";
            document.querySelector("#mapScreen").className = "";

            document.querySelector("#map").style.filter = "blur(20px)";
            locationSearchOverlay.style.display = "block";
            document.querySelector("#sidebar").style.display = "none";
            if (map !== undefined && map !== null) {
                map.remove();
            }
            map = L.map('map').setView([33.9, -118.07], 11);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            homeMarker = L.marker([33.980001, -118.300489], { icon: pinIcon }).addTo(map);
            workMarker = L.marker([34.044981, -118.253554], { icon: pinIcon }).addTo(map);
            polyline = L.polyline(homeToWork, { color: 'blue', weight: 5 }).addTo(map);
            polyline5 = L.polyline(homeToWork2, { color: 'green', weight: 5 }).addTo(map);

            document.querySelector("#locationSearchOverlay").innerHTML = `
                <h1>What will it take to get to work in the future?</h1>
                <label>Location A</label>
                <br><select id="addressInputA" required>
                    <option value=""></option>
                    <option value="a">[HOME] 6525 Normandie Ave, Los Angeles, CA 90044</option>
                </select>
                <br><label>Location B</label>
                <br><select id="addressInputB" required>
                    <option value=""></option>
                    <option value="b">[WORK] 707 S Broadway, Los Angeles, CA 90014</option>
                </select>
                <div id="buttonAlignment">
                    <button id="findRoutesButton" type="submit">Find Routes</button>
                </div>
            `;

            document.querySelector("#sidebar").innerHTML = `
                <i class="fa-solid fa-train-subway fa-4x" id="sidebarCarIcon"></i>
                <div id="routeOption1">
                    <h2>New Route</h2>
                    <p>7.3 Miles</p>
                    <p>292g of CO2</p>
                    <p>Cost: $5.00</p>
                    <p>Est. Time: 9 minutes</p>
                </div>
                <div id="routeOption2">
                    <h2>Old Route</h2>
                    <p>6.2 Miles</p>
                    <p>2440g of CO2</p>
                    <p>Cost: $10.17</p>
                    <p>Est. Time: 12 minutes</p>
                </div>
                `;

        } else if (currentChapter == 14) {

            document.querySelector("#mapScreen").className = "hidden";
            document.querySelector("#storyScreen").className = "";
            document.querySelector("#nextButtonStory").className = "";
            document.querySelector("#mapPopups").innerHTML = "";
            document.querySelector("#buttonHeartArea").className = "hidden";
            document.querySelector("#storyImg").className = "fadeInUp";
            document.querySelector("#storyImg").style.backgroundImage = "url()";
            document.querySelector("#storyText").innerHTML = "";
            textPosition = 0;
            typeWriter(storyText5);

        } else if (currentChapter == 15) {

            document.querySelector("#storyScreen").className = "hidden";
            document.querySelector("#newsScreen").className = "";
            document.querySelector("#newsButtonArea").className = "hidden";
            document.querySelector("#offScreen").className = "";
            document.querySelector("#tablet").className = "";
            screenOn = false;
            tabletNext = false;

            document.querySelector("#tablet").innerHTML = `
                <div id="offScreen"></div>
                <button id="tabletButton"></button>
                <div id="dateTime">
                    <p>September 26th, 2024</p>
                    <p>9:35PM</p>
                </div>
                <div id="weather">
                    <div id="weatherToday">
                        <i class="fa-solid fa-cloud-sun fa-5x"></i>
                        <div id="weatherInfo">
                            <p>78°</p>
                            <p>AQI 19</p>
                        </div>
                    </div>
                    <div id="weatherWeek">
                        <div id="weekDate">
                            <p>9/27</p>
                            <p>9/28</p>
                            <p>9/29</p>
                            <p>9/30</p>
                            <p>10/1</p>
                        </div>
                        <div id="weekIcon">
                            <i class="fa-solid fa-sun fa-2x"></i>
                            <i class="fa-solid fa-sun fa-2x"></i>
                            <i class="fa-solid fa-sun fa-2x"></i>
                            <i class="fa-solid fa-cloud-sun fa-2x"></i>
                            <i class="fa-solid fa-sun fa-2x"></i>
                        </div>
                        <div id="weekTemp">
                            <p>82°</p>
                            <p>80°</p>
                            <p>81°</p>
                            <p>77°</p>
                            <p>81°</p>
                        </div>
                        <div id="weekAQI">
                            <p>AQI 18</p>
                            <p>AQI 16</p>
                            <p>AQI 17</p>
                            <p>AQI 17</p>
                            <p>AQI 19</p>
                        </div>
                    </div>
                </div>
                <div id="bankAccount">
                    <h3>4920 Checking Acc.</h3>
                    <h4>$376</h4>
                    <p>Balance</p>
                </div>
                <div id="steps">
                    <p id="stepsTaken">8,204</p>
                    <p id="maxSteps">/ 10,000</p>
                    <i class="fa-solid fa-shoe-prints fa-rotate-270 fa-2x"></i>
                </div>
                <div id="gasPrice">
                    <i class="fa-solid fa-ticket fa-2x"></i>
                    <p>$5.00 Day Pass</p>
                </div>
                <div id="newsArticle">
                    <h3>TRAIN ISSUES APOLOGY FOR DELAY</h3>
                    <p>The LA Rail Authority has issued an official apology for the 10 minute delay that happened earlier in the day.</p>
                </div>
            `;
            addTabletButton();

        } else if (currentChapter == 16) {

        } else if (currentChapter == 17) {

        } else if (currentChapter == 18) {

        } else if (currentChapter == 19) {

        } else if (currentChapter == 20) {

        } else if (currentChapter == 21) {

        } else if (currentChapter == 22) {

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

    function addTabletButton() {
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
    }

})();
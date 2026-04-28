(function() {
    'use strict';

    const time = document.querySelector("#time");
    const bpm = document.querySelector("#bpm");
    const activity = document.querySelector("#activity");
    const pointButtons = document.querySelectorAll(".point");

    for (let buttons of pointButtons) {
        buttons.addEventListener('click', getData);
    }

    async function getData(event) {
        const fetchPromise = await fetch('./data/data.json');
        const data = await fetchPromise.json();
        const pointNum = event.target.id;
        
        time.innerHTML = `Time: ` + data[pointNum].time;
        bpm.innerHTML = `BPM: ` + data[pointNum].bpm;
        activity.innerHTML = `Activity: ` + data[pointNum].activity;

        for (let points of pointButtons) {
            points.className = "point";
        }
        event.target.className = "point selected";
    }

})();
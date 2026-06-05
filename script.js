(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const sections = document.querySelectorAll('section');
    const h2 = document.querySelector("h2");
    const lightString = document.querySelector("#lightString");
    const darkFilter = document.querySelector("#darkFilter");
    let mode = 'light';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            h2.className = 'switch';
            button.className = 'switch';
            button.innerHTML = '<img src="images/forwardBtn.svg">';
            lightString.src = "images/lightStringOff.svg";
            lightString.style.top = "60px";
            darkFilter.style.display = "none";
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            button.removeAttribute('class');
            h2.removeAttribute('class');
            button.innerHTML = '<img src="images/backwardBtn.svg">';
            lightString.src = "images/lightStringOn.svg";
            lightString.style.top = "42px";
            darkFilter.style.display = "block";
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark';
        }
    })
})()
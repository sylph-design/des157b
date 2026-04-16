( function() {
    "use strict";

    let poemWords = document.querySelectorAll("span");
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let originalPoem = ["The", "wind", "was", "a", "care-free", "soul", "That", "broke", "the", "chains", "of", "earth"];
    let wordSelector = document.querySelectorAll("span");
    let poem = document.querySelector("#poem");

    setInterval(wordJumbler(), 1000);
    setInterval(stopWordJumbler(0), 1000);
    poemWords[0].addEventListener("onmouseover", () => {stopWordJumbler(0);});
    poemWords[0].addEventListener(onmouseover, function () {console.log("help")});

    function wordJumbler () {
        for (let i = 0; i < poemWords.length; i++) {
            let tempWord = poemWords[i].innerHTML;

            for (let j = 0; j < tempWord.length; j++) {
                setInterval(() => {
                    let tempLetter = tempWord[j];
                    let firstPart = tempWord.substring(0, j);
                    let lastPart = tempWord.substring(j + 1);
                    let newLetter = alphabet[Math.floor(Math.random() * 25)];
                    let newString;

                    newString = firstPart + newLetter + lastPart;
                    tempWord = newString;
                    poemWords[i].innerHTML = newString;
                }, Math.floor(Math.random() * 700));
            }
        }
    }

    function stopWordJumbler(wordIndex) {
        console.log(poemWords[wordIndex].innerHTML);
        console.log(wordIndex);
        poemWords[wordIndex].innerHTML = `${originalPoem[wordIndex]}`;
    }
})();
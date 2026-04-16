( function() {
    "use strict";

    let poemWords = document.querySelectorAll("span");
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let originalPoem = ["The", "wind", "was", "a", "care-free", "soul", "That", "broke", "the", "chains", "of", "earth"];
    let jumbling = [true, true, true, true, true, true, true, true, true, true, true, true];


    setInterval(wordJumbler(), 1000);

    function wordJumbler () {
        setInterval(() => {
            for (let i = 0; i < poemWords.length; i++) {
                let tempWord = poemWords[i].innerHTML;
                poemWords[i].addEventListener('mouseover', function () {
                    stopWordJumbler(i);
                });
                poemWords[i].addEventListener('mouseout', function () {
                    jumbling[i] = true;
                });

                if (jumbling[i] === true) {
                    console.log(jumbling[i]);
                    for (let j = 0; j < tempWord.length; j++) {
                        
                            console.log(jumbling[i]);
                            let firstPart = tempWord.substring(0, j);
                            let lastPart = tempWord.substring(j + 1);
                            let newLetter = alphabet[Math.floor(Math.random() * 25)];
                            let newString;

                            newString = firstPart + newLetter + lastPart;
                            tempWord = newString;
                            poemWords[i].innerHTML = newString;
                        
                    }
                }
            }
        }, Math.floor(Math.random() * 300));
    }

    function stopWordJumbler(wordIndex) {
        poemWords[wordIndex].innerHTML = `${originalPoem[wordIndex]}`;
        jumbling[wordIndex] = false;
    }
})();
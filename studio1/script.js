( function() {
    "use strict";

    let poemWords = document.querySelectorAll("span");
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    console.log(poemWords);
    console.log(poemWords[0].innerHTML);

    wordJumbler();

    function wordJumbler () {
        for (let i = 0; i < poemWords.length; i++) {
            let tempWord = poemWords[i].innerHTML;

            for (let j = 0; j < tempWord.length; j++) {
                let tempLetter = tempWord[j];
                console.log(tempLetter);

                console.log(alphabet[Math.floor(Math.random() * 25)]);
                tempWord[j] = alphabet[Math.floor(Math.random() * 25)];
                poemWords[i].innerHTML = tempWord;
            }
        }
    }

    function stopWordJumbler () {

    }
})();
(function () {
    'use strict';

    // function makeUpperCase(aString) {
    //     return aString.toUpperCase();
    // }

    // console.log(makeUpperCase("here is a string!"));

    // let makeUpperCase = function (aString) {
    //     return aString.toUpperCase();
    // }

    // console.log(makeUpperCase("here is a string!"));

    // let makeUpperCase = aString => {
    //     return aString.toUpperCase();
    // }

    // console.log(makeUpperCase("here is a string!"));

    let makeUpperCase = aString => aString.toUpperCase();

    console.log(makeUpperCase("here is a string!"));

    // const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

    // console.log(fullName("Jose", "Gonzolez"));

    const fullName = () => {
       const firstName = "Maria";
       const lastName = "Sanchez";
        return `${firstName} ${lastName}`; 
    }

    console.log(fullName());

    const fruit = ["banana", "apple", "lemon", "kiwi"];
    const upperFruit = [];

    fruit.forEach( thisFruit => {
        upperFruit.push(thisFruit.toUpperCase());
    });

    const employee = function(fname, lname, jobtitle) {
        this.fname = fname;
        this.lname = lname;
        this.position = jobtitle;
        this.fullName = () => `${fname} ${lname}`;
    }

    const id1234 = new employee("Bob", "Smith", "Mechanic");
    console.log(id1234.fname);
    console.log(id1234.fullName());

})();
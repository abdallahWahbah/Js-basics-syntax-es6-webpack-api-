/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956); // hoisting with functions only works with for function declerations 
// you can't call an (expression) fucntion before it

var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age); // undefined
var age = 23;

function foo() {
    console.log(age); // undefined cause the age (global) is completly different from the age in this scope
    var age = 65;
    console.log(age); // 65
}
foo();
console.log(age); 23
*/


/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// method borrowing >>>>>> instead of rewriting the same function in mike from john

mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/

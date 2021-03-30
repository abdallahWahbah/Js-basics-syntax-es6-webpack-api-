// Lecture4: let and const

// // ES5
// var name5='Jane Smith';
// var age=22;
// name5 = 'Jane Miller';
// console.log(name5);
// function drivingLicence5(passedExam)
// {
//     if(passedExam)
//     {
//         var name = "jane";
//         var age = 22;        
//     }
//     // console can see the name and age because they are in the sama function "function-Scoped"
//     console.log(name + " has passed the exam, its age is "+age);
// }
// drivingLicence5(true);
// var x = 23;
// for (var x = 0; x < 4; x++)// the same variable, you override it
// {
//     console.log(x);
// }
// console.log(x);

// // ES6
// const name6 = 'jane Smith';
// let age6=22;
// //name6 = 'jane miller'; const variable in imuutable
// console.log(name6);
// function drivingLicence6(passedExam)
//  {
//     if (passedExam) {
//         let name = "jane";
//         const ageJane = 20;
//         }
//         // console can't see the name and age because they are not in the sama block "block-scoped"
//         // and if we wanted to use the let variable, just define it outside the if statement, const is defined at its line only>>>you can not say>>>>>>const x; x="ahmed";
      
//         //console.log(name + "has passed the exam, its age is " + ageJane);

// }
// drivingLicence6(true);

// let i =23;
// for (let i = 0; i < 4; i++)// this "i" variable is completly different from the above one (block-scoped)
// {
//     console.log(i);
// }
// console.log(i);






// Lecture5: Blocks and IIFEs (Immediatly invoked function expression)

// // ES5
// (function(){
//     var c = 3;
// })();
// //console.log(c); // error, c is a function-scoped

// // ES6
// {
//     const a = 1;
//     let b = 2;
//     var x = 3; // x is a function-scoped, but it is in a block, so you can call it from outside
// }
// console.log(x);






// Lecture6: Strings

// let firstName = "abdo";
// let lastName = "wahbah";
// const yearOfBirth = 1998;

// function calcAge(year)
// {
//     return 2020-year;
// }

// // ES5
// console.log("This is "+ firstName+" "+ lastName+", he was born in "+ yearOfBirth + ", and he is now "+ calcAge(yearOfBirth));

// // ES6
// console.log(`This is ${firstName} ${lastName}, he was born in ${yearOfBirth}, and he is now ${calcAge(yearOfBirth)}`);

// // some string methods
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith("q")); // false
// console.log(n.endsWith("ah")); // true
// console.log(n.includes("do")); // true
// console.log(`${yearOfBirth} `.repeat(6)); //  repeats the date 6 times in one line






// Lecture7: Arrow functions

// // we want to calculate the ages of some persons
// const years=[1990, 1992, 1994, 1996, 1998];

// // ES5
// var ages5 = years.map(function(el){
//     return 2020-el
// });
// console.log(ages5);


// // ES6
// // one argument, one line of code
// let ages6 = years.map( el => 2020-el);
// console.log(ages6);
// // two(or more) args, one line of code
// ages6 = years.map((el, index) => `Age Element :${index+1} ${2020-el}`);
// console.log(ages6);
// // two(or more) args, more than one line of code{} // you have to return if you want
// ages6 = years.map((el, index) =>
// {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age Element :${index+1} ${age}`;
// });
// console.log(ages6);






// Lecture8: Arrow functions 2 (This)

// // ES5
// var box5=
// {
//     color:"green",
//     position : 1,
//     clickMe : function()
//     {
//         var self = this; // the box5 object
//         document.querySelector(".green").addEventListener("click", function()
//         {
//             //var str = "This is box number "+this.position + " and its color "+this.color; // "this" is not referring to the anonymous function, refering to the global window
//             var str = "This is box number " + self.position + " and its color " + self.color;
//             console.log(str);
//         });
//     }
// }
// //box5.clickMe();

// // ES6
// const box6 =
// {
//     color: "green",
//     position: 1,
//     clickMe: function()
//      {
//         document.querySelector(".green").addEventListener("click",() => {
//             var str = "This is box number "+this.position + " and its color is "+this.color;
//             console.log(str);
//         });
//     }
// }
// box6.clickMe();

// // ES5
// function Person(name)
// {
//     this.name=name
// }
// Person.prototype.myFriends5 = function(friends)
// {
//     var self = this; // self points to the function constructor, so you can access the name
//     var arr = friends.map(function(el)
//     {
//         //return this.name +" is friend with "+el; // this points to the anon function, it doesn't have a name, so it will point to the window// but it worked !!!!!!!!!
//         return self.name + " is friend with "+ el;
//     });
//     console.log(arr);
// }
// var friends = ["bob", "sharly", "maria"];
// new Person("john").myFriends5(friends);

// // ES6
// Person.prototype.myFriends6 = function (friends) {
//     var arr = friends.map(el => `${this.name} is friend with ${el}`);
//     console.log(arr);
// }
// new Person("mike").myFriends6(friends);






// Lecture9: Destructuring

// //ES5
// var john = ["john", 26];
// var johnName = john[0];
// var johnAge = john[1];

// //ES6
// const [name, age] = ["mark", 30];// RHS:constructing an array, LHS decontructing it with the same brackets []
// console.log(name, age);

// const obj =
// {
//     firstName:"sharly",
//     lastName:"Mark"
// };
// const {firstName, lastName} = obj; // LHS is deconstructing the Object >>>>> the same {}, attributes must have the sama name
// console.log(firstName, lastName);
// // if you want to change the attribute names
// const {firstName : a, lastName : b} = obj;
// console.log(a, b);

// function calcAgeRetirement(yearOfBirth)
// {
//     var age = new Date().getFullYear() - yearOfBirth;
//     return [age, 60-age]; // return two different values
// }
// const [x, z] = calcAgeRetirement(1998);
// console.log(x);
// console.log(z);






// Lecture10: Arrays

// const boxes = document.querySelectorAll(".box");// returns a nodeList

// // ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// // boxesArr5.forEach(function(cur)
// // {
// //     cur.style.background = "dodgerblue";
// // });

// // ES6
// const boxesArr6 = Array.from(boxes); // converts nodeList to array
// boxesArr6.forEach(cur => cur.style.background = "dodgerblue")                                // style, className, includes

// ES5
// for ( var i=0; i<boxesArr5.length; i++)
// {
//     if (boxesArr5[i].className === "box blue") continue;
//     boxesArr5[i].textContent = "I have changes to blue";
// }

// // ES6
// for (const cur of boxesArr6)
// {
//     // if(cur.className === "box blue")
//     if(cur.className.includes("blue"))
//     {
//          continue;
//     }
//     cur.textContent = "I changed to blue";
// }

// // a group of children has a teenager of age > 20 years old, find his index and his age (the one with age > 20)
//var ages = [12, 14, 9, 22, 7, 16];

// // ES5
// var full = ages.map(function(cur)
// {
//     return cur > 20
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6
// console.log(ages.findIndex(cur => cur >= 20)); // cur is an arrow function .. return if the cur is greater than 20
// console.log(ages.find(cur => cur >= 20));





 
// Lecture11: Spread operator  
// converts an array into single values

// function addFourAges(a, b, c, d)
// {
//     return a+b+c+d;
// }
// var sum1 = addFourAges(10, 20, 30, 40);
// console.log(sum1);

// // ES5
// var ages = [10, 20, 30, 40];
// var sum2= addFourAges.apply(null, ages)
// console.log(sum2);

// // ES6
// var sum3 = addFourAges(...ages); // "..." is the spread operator
// console.log(sum3);

// const familySmith = ["john","jane", "mark"];
// const familyMiller = ["mark", "bob", "ann"];
// const bigFamily = [...familySmith, ...familyMiller] // expands the 2 arrays and put them into this one
// console.log(bigFamily);
// const bigFamily2 = [...familySmith, "hello from the other side", ...familyMiller]
// console.log(bigFamily2);

// // changing all nodes color in the pages
// var h = document.querySelector("h1");
// var boxes = document.querySelectorAll(".box"); // nodeList
// var all = [h, ...boxes];
// Array.from(all).forEach(cur => cur.style.color= "purple");






// Lecture12: Rest parameters 
// converts single values to an array // used in the function decleration

/*
// ES5
function isFullAge5()
{
    // console.log(arguments);
    // returns something like an array, but it is not, if you wanted to transform it ...
    var argsArray = Array.prototype.slice.call(arguments);
    argsArray.forEach(function(cur)
    {
        console.log((2020-cur) >= 16);
    });
}
isFullAge5(1990, 1992, 2006, 2000, 1880);

// ES6
function isFullAge6(...years)
{
    // now years is an array
    years.forEach(cur => console.log((2020-cur) > 16));
}
isFullAge6(1990, 1992, 2006, 2000, 1880);
*/

/*
// Adding another argument

// ES5
function isFullAge5(limit) {
    console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments, 1); // 1 is related to slice, it will cut from the element number 1 which means, ignore first parameter.....at position 1, it will start copying the array
    console.log(argsArray);
    argsArray.forEach(function (cur) {
        console.log((2020 - cur) >= limit);
    });
}
isFullAge5(19, 1990, 1992, 2006, 2000, 1880);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2020 - cur) > limit));
}
isFullAge6(19, 1990, 1992, 2006, 2000, 1880);
*/






// Lecture13: Default Parameters

/*
// ES5
function Person(firstName, yearOfBirth, lastName, nationality)
{
    lastName === undefined ? lastName = "Smith" : nationality = "America";
    nationality === undefined ? nationality = "American" : nationality = nationality;

    this.firstName=firstName;
    this.yearOfBirth=yearOfBirth;
    this.lastName=lastName;
    this.nationality=nationality;
}

var john = new Person("john", 1990);
var layla = new Person("layla", 1999, "Jack", "Italian");
*/
/*
// ES6
function Person(firstName, yearOfBirth, lastName = "Smith", nationality = "American")
{
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john = new Person("john", 1990);
var layla = new Person("layla", 1999, "Jack", "Italian");
*/






// Lecture14: Maps
/*
// Key-Value pair, the key is not constrained to a specific data type, it can be int, string.....
var question = new Map();
question.set("question", "what is the ofiicial name of the latest major javascript version ?");
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "correct answer :D");
question.set(false, "Wrong answer, please try again");

console.log(question.get("question"));
//console.log(question.size);
//if(question.has(7)) question.delete(4); // delete the map value at position 4 if the ot has a key = 7
//question.clear();

//printing all map data
//question.forEach((cur, key) => console.log(`This is ${key} and it's set to ${cur}`));

for(let [key, value] of question.entries())
{
    // returns all entries of question map - use all desctructring - you can easily use forEach such as above
    if(typeof(key) === "number")console.log(`answer ${key} : ${value}`);
};

const ans = parseInt(prompt("write your answer"));
console.log(question.get(ans === question.get("correct"))); // question.get(ans === question.get("correct")) >>>>>>>>> the key of this statement is true or false
*/






// Lecture15: Classes
/*
// ES5
function Person5(name, yearOfBirth)
{
    this.name=name;
    this.yearOfBirth = yearOfBirth;
}
Person5.prototype.calcAge = function()
{
    var now = new Date().getFullYear() - this.yearOfBirth;
    console.log(now);
}
var john = new Person5("john", 1998);

// ES6
class Person6
{
    constructor(name, yearOfBirth)
    {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    calcAge()
    {
        var now = new Date().getFullYear() - this.yearOfBirth;
        console.log(now);
    }
    static greeting()
    {
        console.log("Hey there!");
    }
}
const lyly = new Person6("lyly", 1990);
Person6.greeting();
*/





// Lecture16: Classes and SubClasses
/*
// ES5 ......... inheritance
function Person5(name, yearOfBirth, job)
{
    this.name=name;
    this.yearOfBirth = yearOfBirth;
    this.job=job;
}
Person5.prototype.calcAge = function()
{
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) // SubClass
{
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames=olymicGames;
    this.medals=medals;
}
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5 ("john", 1998, "teacher", 3, 10);
johnAthlete5.calcAge();
johnAthlete5.wonMedal();

// ES6
class Person6
{
    constructor(name, yearOfBirth, job)
    {
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }
    calculateAge()
    {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6
{
    constructor(name, yearOfBirth, job, olymicGames, medals)
    {
        super(name, yearOfBirth, job);
        this.olymicGames=olymicGames;
        this.medals=medals;
    }
    wonMedal()
    {
        this.medals++;
        console.log(this.medals);
    }
}
var johnAthlete6 = new Athlete6("john", 1998, "techer", 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/






/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

// class Element {
//   constructor(name, buildYear) {
//     this.name = name;
//     this.buildYear = buildYear;
//   }
// }
// class Park extends Element {
//   constructor(name, buildYear, area, numTrees) {
//     super(name, buildYear);
//     this.area = area;
//     this.numTrees = numTrees;
//   }
//   treeDensity() {
//     const density = this.numTrees / this.area;
//     console.log(
//       `${this.name} has a tree density of ${density} trees per square km`
//     );
//   }
// }
// class Street extends Element {
//   constructor(
//     name,
//     buildYear,
//     length,
//     size = 3 /** points to the classification map */
//   ) {
//     super(name, buildYear);
//     this.length = length;
//     this.size = size;
//   }
//   classifyStreet() {
//     const classification = new Map();
//     classification.set(1, "tiny");
//     classification.set(2, "small");
//     classification.set(3, "normal");
//     classification.set(4, "big");
//     classification.set(5, "huge");
//     console.log(
//       `${this.name}, built in ${this.buildYear}, is a ${classification.get(
//         this.size
//       )} street`
//     );
//   }
// }

// const allParks = [
//   new Park("Green Park", 1987, 0.2, 215),
//   new Park("National Park", 1894, 2.9, 3541),
//   new Park("Oak Park", 1953, 0.4, 949),
// ];

// const allStreets = [
//   new Street("Ocean Avenue", 1999, 1.1, 4),
//   new Street("Evergreen Street", 2008, 2.7, 2),
//   new Street("4th Street", 2015, 0.8),
//   new Street("Sunset Boulevard", 1982, 2.5, 5),
// ];

// function calc(arr) {
//   var sum = arr.reduce((prev, cur, index) => prev + cur, 0); // start at index = 0
//   //reduce is a way of array looping such as forEach and mapping
//   return [sum, sum / arr.length];
// }

// function reportParks(p) {
//   console.log("-----Parks Report-----");

//   // Density
//   p.forEach((el) => el.treeDensity());

//   // Average Age
//   const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
//   const [totalAge, averageAge] = calc(ages);
//   console.log(`Our ${p.length} parks have an average of ${averageAge} years`);

//   // Which park has more than 1000 trees
//   const i = p.map((el) => el.numTrees).findIndex((el) => el >= 1000);
//   console.log(`${p[i].name} has more than 1000 trees`);
// }
// function reportStreets(s) {
//   console.log("-----STREETS REPORT-----");

//   //Total and average length of the town's streets
//   const [totalLength, averageLength] = calc(s.map((el) => el.length));
//   console.log(
//     `Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${averageLength} km.`
//   );

//   // Classify sizes
//   s.forEach((el) => el.classifyStreet());
// }
// reportParks(allParks);
// reportStreets(allStreets);

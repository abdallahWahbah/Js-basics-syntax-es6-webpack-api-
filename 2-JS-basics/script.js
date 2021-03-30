// //Variables
// var firstName='Abdallah';
// console.log(firstName);

// var boolVariable;
// console.log(boolVariable);
// boolVariable=true;
// console.log(boolVariable);

// var age=10;
// console.log(age);

// //Variable Mutation and Coercion (Coercion means : taking an int value and converting it to string automatically to print it)

// //Type Coercion
// console.log(firstName + ' ' + age);

// //Type Mutation
// var abdo='abdallah';
// console.log(abdo);
// abdo=12;
// console.log(abdo);

// alert(firstName + ' is '+ age + ' years old' + ' he is not married')

// var lastName = prompt('what is his lastName');
// alert('Your name is ' + firstName + ' ' + lastName + ' !!!!!!');

// var isMarried=false, age=10;
// console.log(typeof isMarried);
// console.log(typeof age);
// var clear;
// console.log(typeof clear);


// var x = 2*2, y=149;
// console.log('mark\'s');
// console.log(x, y);                            //Logging two values at the same time

// if( x == 4)
// {
//     console.log(x+ '  asdasdasd');
// }

// var name='John';
// var age=12;
// if(age < 13) console.log(name +' is a young man');
// else if( age > 12 && age < 20) console.log(name +' is a teenager');
// else console.log(name + ' is a man');


// //Ternary Operator
// var age = 20;
// age >= 18 ? console.log(true) : console.log(false);
// var  drinkName = age == 20 ? 'beer' : 'juice';
// console.log(drinkName);

// //Switch Statement
// var job = 'enginner';
// switch(job)
// {
//     case 'teacher' :
//         console.log('teacher');
//         break;
//     case 'police':
//         console.log('police');
//         break;
//     case 'doctor' :
//         console.log('doctor');
//         break;
//     default :
//         console.log('Engineer')
// }



// // Falsy values : undefined, none, 0, '', NaN
// // Truthy values : NOT falsy values
// var height;
// if(height) console.log('Hello');
// else console.log('Not hello');





//video 17
// var abdoAge = calculateAge(1998);
// var mohamedAge = calculateAge(1997);
// var ahmedAge = calculateAge(1996);
// console.log(abdoAge, mohamedAge, ahmedAge);
// YearsUntilRetirement(1998, 'Abdallah');
// function calculateAge(birthDate)
// {
//     return 2020-birthDate;
// }
// function YearsUntilRetirement(birthDate, name)
// {
//     var age = calculateAge(birthDate);
//     var retirement=60-age;
//     if(retirement > 0) console.log(name + ' retires after ' + retirement + ' years')
// }




// video 18
// function decleration
// function whatTheyDo(job, firstName)
// {
// }
// // function statement
// var whatTheyWillDi = function(job, lastName)
// {

// }




// video 19
// // Arrays
// var names = ['Abdallah', 'Mahmoud', 'AbdElbary'];
// var years = new Array(1998, 1959, 1770);
// console.log(names[0]);
// console.log(years.length);

// names[2] =' Wahbah';
// names[names.length]=' HEllo';
// console.log(names);

// //Different data types
// var diff=new Array('Ahmed', 'Mohamed', 1990, false);
// diff.push('Wahbah');
// diff.unshift('Mr.');// Adds an element to the beginning of the array
// console.log(diff);

// diff.pop();
// diff.shift(); // Removes the first element of the array
// console.log(diff);

// console.log(diff.indexOf(1990)); // testes if the element is in the array or not and returns its position if exists

// var isAhmed = diff.indexOf('bahaa') == -1 ? 'he is not ahmed' : 'he is ahmed' 
// console.log(isAhmed);





// video 22
// // Objects and Properties
// var john =
// {
//     firstName : 'John',
//     lastName : 'Smith',
//     dateOfBirth : 1990,
//     family : ['chris', 'kaka', 'fabinho'],
//     job : 'teaching',
//     isMarried : false
// }
// console.log(john);
// console.log(john.firstName); // using dot notation
// console.log(john['lastName']); // using key name

// john.job = 'Designing';
// john['isMarried'] = true;
// console.log(john);

// // Another Decleration
// var jane = new Object();
// jane.name='Jane';
// jane.age=12;
// jane.holidays=['france', 'Italy'];
// jane['destination'] = 'Germany';
// console.log(jane);





// // video 23
// var john =
// {
//     firstName : 'John',
//     lastName : 'Smith',
//     dateOfBirth : 1990,
//     family : ['chris', 'kaka', 'fabinho'],
//     job : 'teaching',
//     isMarried : false,
//     CalcAge : function()
//     {
//         return 2018 - this.dateOfBirth;
//     },
//     CalculateAge : function ( birthYear)
//     {
//         return 2020-birthYear;
//     },
//     CalculatingAge : function()
//     {
//         this.lives = 2020 - this.dateOfBirth;
//     }
// }
// console.log(john.CalcAge());
// console.log(john.CalculateAge(1990));
// john.age = john.CalculateAge(1998); // adding new property to john after CalculateAge
// john.CalculatingAge(); // call the method inside the object to excute itself and add the value to (lives)
// console.log(john);







// // Video 25 Coding Challenge
// var john =
// {
//     fullName : 'John Smith',
//     mass : 80,
//     height : 170,
//     CalcBMI : function()
//     {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// }
// var mark =
// {
//     fullName: 'Mark Miller',
//     mass: 60,
//     height: 150,
//     CalcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     },
// }

// john.CalcBMI();
// mark.CalcBMI();
// console.log(john, mark);

// if(john.BMI > mark.BMI){console.log(john.fullName + ' has the highest BMI');}
// else if (john.BMI < mark.BMI){console.log(mark.fullName + ' has the highest BMI');}





// video 26: Loops and iteration

/*
// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

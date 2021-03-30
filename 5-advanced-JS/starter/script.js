// Lecture4: Function Constructor
/*
var alex =
{
    name: "alex",
    yearOfBirth: 1998,
    job: "Teacher"
};

var Person = function (name, yearOfBirth, job)
{
    this.name = name; // (this) points to the empty object that we created, while the RHS points to the parameters
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function()
{
    console.log(2020 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1980, 'Designer');
var mark = new Person('Mark', 1970, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
jane.lastName = 'Hello';
console.log(jane.lastName); 
*/



// Lecture6: Object.Create
/*
var personProto =
{
    // school : 'Omar Ibn Elkhatab',

    calculateAge : function()
    {
        console.log(2020-this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name='john';
john.yearOfBirth=1990;
john.job='teacher';

var jane = Object.create(personProto, {
    name :{value : 'jane'},
    yearOfBirth : {value : 1980},
    job : {value : 'Designer'}
});
// The difference between Object.Creat and Fucntion Constructor
// Object.Create builds an object that inherits directly from the one we passed in the first argument
// Function Cinstructor: the newly created object inherits from the constructor's prototype property
*/



// Lecture7: Primitives vs objects
/*
// Premitives
var a = 30; // when we instantiate a variable, we make a new position in the memory for it
var b = a;
var a  = 17;
console.log(a);
console.log(b);

// Objects
var obj1 =
{
    name : 'john',
    age : 21
};
var obj2 = obj1; // no new object is created, we just made a reference (obj2) in the memory to obj1
// we don't equalize obj2 to obj1, we make a reference to obj1 position in the memory, so whenever you change obj1>>>>>obj2 will change
obj1.age = 30;
console.log(obj1);
console.log(obj2);

// Functions
var age = 27;
var obj =
{
    name : 'abdo',
    city : 'cairo'
}
function change(a, b)
{
    a=30;
    b.city = 'Ismailia';
}
change(age, obj); // when we pass a primitive to a func, a simple copy is created
console.log(age); 
console.log(obj.city); 
*/




// Lecture8: Passing Functions as Arguments
/*
var years = [1990, 1965, 2005, 1936, 1998];

function arrayCacl(arr, fn)
{
    var arrRes = [];
    for (var i = 0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes; 
}
function calculateAge(element)
{
    return 2020-element;
}
function isFullAge(element)
{
    return element >= 18;
}
function maxHeartRate(element)
{
    if(element >=18 && element<=81)
    {
        return Math.round(206.9 - .67 * element);
    }
    else
    {
        return -1;
    }
}
var ages = arrayCacl(years, calculateAge) ;  // calculateAge is a callBack function which we pass it as a parameter, so we don't type '()'
var fullAges = arrayCacl(ages, isFullAge);
var heartRates = arrayCacl(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(heartRates);
*/



// Lecture9: Functions returning Functions
/*
function interviewQuestion(job)
{
    if(job == 'designer')
    {
        return function(name) //anoyemous function
        {
            console.log( 'Can yo please explain what UX is mr, '+ name + ' ?');
        };
    }
    else if(job == 'teacher')
    {
        return function(name)
        {
            console.log('What subject do you teach mr, ' + name + ' ?');
        };
    }
    else
    {
        return function(name)
        {   
            console.log('What do you do mr, ' + name + ' ?');
        }
    }
}

var teachQuestion = interviewQuestion('teacher'); // now teacherQuestion is a function which you can call and pass a name parameter to it
var designerQuestion = interviewQuestion('designer');
var anotherQuestion = interviewQuestion('engineer');

teachQuestion('john');
designerQuestion('jane');
designerQuestion('mark');
anotherQuestion('abdallah')

// Genious way to pass the name in one line
interviewQuestion('teacher')('wahbah');
*/



// Lecture10: IIFE
/*
// old way
function game()
{
    var score = Math.random() * 10;
    console.log( score >= 5);
}
game();

//to execute a function without calling it ............. used for data privacy
( function()
{
    var score = Math.random() * 10;
    console.log( score >= 5)
})(); // the second '()'is for calling the function automatically

// you can pass a value to IIFE
(function(value)
{
    var score = Math.random() * 10;
    console.log( score >= (5 -value));
})(5); // this 5 is the value in the parameter list that should be passed
*/



// Lecture11: Closures
/*
function retirement(retirementAge)
{
    var a = ' years left until retirement';
    return function(yearOfBirth) // anonumous function
    {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a );
    }
}
//retirement(60)(1998);
var retirementEgypt=retirement(60);
var retirementUS=retirement(66);
var retirementGermany=retirement(65);
var retirementIceland=retirement(67);

retirementEgypt(1998);
retirementGermany(1998);
retirementUS(1998);
retirementIceland(1998);

function interviewQuestion(job) { // the same function with the power of closures
    return function(name)
    {
        if (job =='designer')
        {
            console.log('Can yo please explain what UX is mr, ' + name + ' ?');
        } 
        else if(job == 'teacher')
        {
            console.log('What subject do you teach mr, ' + name + ' ?');

        }
        else
        {
            console.log('What do you do mr, ' + name + ' ?');
        }
    }
}

interviewQuestion('teacher')('john');
*/




// Lecture12: Bind, Call and Apply methods
/*
var john =
{
    name : 'john',
    ages : 26,
    job : 'teacher',
    presentation : function(style, timeOfDay)
    {
        if(style == 'formal')
        {
            console.log('Good '+ timeOfDay+' ladies and gentlemen, I am '+this.name+', I am '+ this.ages
            +', and I am '+this.job);
        }
        else if(style == 'friendly')
        {
            console.log( 'Hey, what\'s up, I am ' + this.name + ', I am ' + this.ages
                + ', and I am ' + this.job +' ' +timeOfDay);        }
    }
}

var emily =
{
    name : 'Emily',
    ages : 35,
    job : 'designer'
}

john.presentation('friendly', 'morning');

// (Call) Method Borrowing >>>>>> we borrowed the method from john and used it in emily
john.presentation.call(emily, 'formal', 'afternoon'); // to call a function in another object for emily

// (Apply) is the same as call method, but it take the parameter of the function in an array
john.presentation.apply(emily, ['friendly', 'morning']);

// (Bind) is similar to Call method, it doesn't call the function, it makes a copy of it (returns a function)
// Bind allow us to reset some arguments
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morninnnnnnnnnng'); // we pass the remaining arguments
johnFriendly('night');

var emilyFormal=john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 2005, 1936, 1998];

function arrayCacl(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(element) { // callback function
    return 2020 - element;
}
function isFullAge(limit, element) {
    return element >= limit; //  the limit is the official age to have an id such as : 16 in egypt
}

var ages = arrayCacl(years, calculateAge);
var fullJapan = arrayCacl(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/



/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them (questions) all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/*
(function()
{
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.chackAnswer = function (answer) {
        if (answer == this.correct) console.log('correct answer');
        else console.log('wrong answer, try again !!!!');
    }

    var q1 = new Question('Is JS the collest answer in the world ?', ['yes', 'no'], 0);
    var q2 = new Question('What is your favourite teacher\'s name?', ['ebrahim', 'hasal', 'abdo'], 2);
    var q3 = new Question('What is your favourit\'s teacher\'s player ?', ['messi', 'ronald', 'ribery', 'robben'], 3);

    var questions = [q1, q2, q3];
    var randomNumber = Math.floor(Math.random() * questions.length);
    questions[randomNumber].displayQuestion();

    var answer = parseInt(prompt('Please write the correct answer !'));
    questions[randomNumber].chackAnswer(answer);
})();
*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


/*
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.chackAnswer = function (answer, callback) {
        var score;
        if (answer == this.correct)
        {
            console.log('correct answer');
            score = callback(true);
        } 
        else 
        {
            console.log('wrong answer, try again !!!!');
            score = callback(false);
        }
        this.displayScore(score);
    }

    Question.prototype.displayScore = function (score)
    {
        console.log('Your score: ' + score);
        console.log('------------------------')
    }
    var q1 = new Question('Is JS the collest answer in the world ?', ['yes', 'no'], 0);
    var q2 = new Question('What is your favourite teacher\'s name?', ['ebrahim', 'hasal', 'abdo'], 2);
    var q3 = new Question('What is your favourit\'s teacher\'s player ?', ['messi', 'ronald', 'ribery', 'robben'], 3);

    var questions = [q1, q2, q3];

    function score()
    {
        var sc = 0;
        return function(correct)
        {
            if(correct)
            {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    // remember that keepScore is now a variable that contains a function, and you can access sc by keepScore function

    function nextQuestion()
    {
        var randomNumber = Math.floor(Math.random() * questions.length);
        questions[randomNumber].displayQuestion();
        
        var answer = prompt('Please write the correct answer !');

        if(answer != 'exit')
        {
            questions[randomNumber].chackAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
    
})();
*/





















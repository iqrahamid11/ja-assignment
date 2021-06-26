
// alert("Hello World!");

/*1. Write a program that takes a positive integer from user &
display the following in your browser.

a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/


/*var positiveInteger = prompt ("Enter positive integer value");
var num1 = Math.round(positiveInteger);
var num2 = Math.floor(positiveInteger);
var num3 = Math.ceil(positiveInteger);

document.write("number: " + positiveInteger + "<br>" + "round off value: " + num1 + "<br>" + "floor value: " + num2 + "<br>" + "ceil value: " + num3);*/


/*2. Write a program that takes a negative floating point
number from user & display the following in your browser.

a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/


/*var negativePoint = prompt ("Enter negative value");
var value1 = Math.round(negativePoint);
var value2 = Math.floor(negativePoint);
var value3 = Math.ceil(negativePoint);

document.write("number: " + negativePoint + "<br>" + "round off value: " + value1 + "<br>" + "floor value: " + value2 + "<br>" + "ceil value: " + value3);*/


/*3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5*/

/*var number = Math.abs(-5);

document.write("The absolute value of -5 is " + number)*/


/*4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.:*/

/*var dice = Math.random() * 6;
var a = parseInt(dice);

document.write("random dice value: " + a);*/

/*5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser*/

/*var coinHeads =  Math.random() * 2;
var coinTails =  Math.random() * 2;

var heads = parseInt(coinHeads);
var tails = parseInt(coinTails);

document.write(heads + "<br>" + "random coin value: Heads" + "<br>" + tails + "<br>" + "random coin value: Tails")*/
 

/*6. Write a program that shows a random number between 1
and 100 in your browser.*/


/*var number = Math.random() * 100;
var display = parseInt(number);

document.write("random number between 1 and 100: " + display);*/


/*7. Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:

a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms*/

/*var weight = prompt("Enter your weight in kilograms");
var usersWeight = parseFloat(weight);

document.write("The weight of user is " + usersWeight + " " + "kilograms");*/


/*8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.*/


/*var secretNum = Math.random() * 10;
var num = prompt("Enter a number between 1 and 10");

if(num === secretNum){
    alert("Congratulate the user!");
}

else{
    alert("Try Again! \n" +  "Prevent this page from creating additional dialogs");
}*/


/*1. Write a program that displays current date and time in
your browser.*/

/*var today = new Date();
var day = today.getTime();
var date = today.getDate();
var year = today.getYear();
var hours = today.getTime();
var min = today.getMinutes();
var sec = today.getSeconds();

document.write(today);*/


/*2. Write a program that alerts the current month in words.
For example December.*/


/*var months = ["january", "febraury", "march", "april", "may", "June", "july", "august", "september", "october", "november", "december"];
var month = new Date();
var currentMonth = month.getMonth();
var thisMonth = months [currentMonth];

document.write("Current month: " + thisMonth);*/


/*3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun.*/


/*var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date();
var currentDay = day.getDay();
var today = week [currentDay];

document.write("Today is " + today);*/


/*4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today.*/


/*var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = new Date();
var currentDay = day.getDay();
var today = week [currentDay];

if(newDay === saturday, sunday){
    alert("It's Fun day");
}*/


/*5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”.*/


/*var now = new Date();

if(now === 15){
    alert("First fifteen days");
}

else{
    alert("Last days of the month");
}*/


/*6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object.*/


/*var date = new Date();
var sec = new Date (1970);
var second = sec.getMilliseconds();
var second1 = date - second;
var min = sec.getMinutes();
var minutes = second/1000*60*60*24*30*12;

document.write("Current Date: " + date + "<br>" + "Elapsed milliseconds since january 1, 1970: " + second1 + "<br>" + "Elapsed minutes since january 1, 1970: " + minutes);*/



/*7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”.*/

// var today = new Date();
// var time= today.getTime();

// if(time === time ) {
//     alert("Its AM")
// }
// else{
//     alert("Its PM")
// }



/*8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate.*/


/*var laterDate = new Date("dec 31 2020");

document.write("Later Date: " + laterDate);*/


/*9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015*/


/*var firstDate = new Date("june 18, 2015");
var mili = firstDate.getTime();
var today = new Date();
var todaymili = today.getTime();
var days = mili + todaymili;
var day = Math.ceil(days/(1000*60*60*24*30*12));

alert(day + " days have passed since 1st Ramadan, 2021");*/


/*10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015.*/



/*13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser.*/

// var dob = new Date ( prompt("Enter your birth date"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dofmili;
// var age = Math.floor(diff/(1000*60*60*24*30*12));

// document.write(age);










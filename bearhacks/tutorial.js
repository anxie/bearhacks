/* Welcome to Bearhacks!

  Today, you will learn the basics of a programming language called JavaScript. JavaScript is most often used for web development alongside HTML/CSS. After this tutorial, you will have the opportunity build a game/simulation of your own design!

  As a quick aside, any text in this green font is a comment. Comments are meant to be notes to the programmer. In this tutorial, all of the comments will be instructions/explanations, so please read them! If you have any questions at any point, please ask your mentor.
 */

// 0. Printing
/* Printing to the Console

	On the right hand side of this window is a console that displays the output of
	our program. To "print" to this console, we can use console.log(). The command
	below will print out "hello world" to our console. Try it!
 */
console.log("hello world");

/* We wrapped the text "hello world" with a pair of quotes, because it is a String
	of text. We can also print other things such as numbers. Unlike Strings,
	numbers are not in quotes. Try printing a number below!
*/

/* YOUR CODE HERE */




// 1. Variables
/* Variables
 *
 * All applications, games, search engines use and store different types of data in
 * variables. A variable stores a piece of data and gives it a specific name.
 *
 * The following code creates and assigns the variable my_name to "Oski" and the
 * variable my_age to 147 and the variable my_major to ‘EECS’
 */

var my_name = "Oski";
var my_age = 147;
var my_major = "EECS";

console.log(my_name);
console.log(my_age);
console.log(my_major);

// We can also re-assign a variable to a different value after its initial definition

my_name = "Berkeley";

// Now try changing the variable my_age to 18

/* YOUR CODE HERE */





// 2. Booleans
/* Booleans

  There are other types of variables besides words and numbers. What about a statement, like “Blue Whales are the heaviest mammals?” This statement has only two possibilities - it is true, or it is false. Statements that are either true or false, with no in-betweens, are called Boolean expressions.

  Here are a few examples of expressions in JavaScript that evaluate to true or false:
 */

// In JavaScript, to check for the equality between two things, we use the triple equal sign, ===
console.log(3 === 3);

console.log(true);

console.log(3 + 4 > 6);

console.log(false);

console.log(1 < -2);

console.log(9 === 3 * 3);




// 3. Objects
/* Objects

	From the last sections, we learned that a variable can hold data and an array is a special type of variable that holds several pieces of data.

	An object is another special type of variable. Like arrays, an object can hold more than one piece of data, but we associate each piece of data an object holds to an attribute name.

	Below, we have rewritten the code from the variables section so that they are attributes of the object called oski. Review the syntax for object creation before moving on!
 */

var oski = {
	my_name: "Oski",
	my_age: 147,
	my_major: "EECS"
};

// We can access the properties of an object in two different ways.
var nameOne = oski.my_name;

// Or
var nameTwo = oski["my_name"];

// Try printing these two variables onto the console to check that they're the same

/* YOUR CODE HERE */




// Now access oski's my_age variable and put into a new variable called age.

/* YOUR CODE HERE */





// 4. Arrays
/* Arrays

	We've learned that variables can hold data. In the last section, we saw variables that held single pieces of data. Here, we'll introduce arrays, which are a special type of variables that can hold more than one piece of data.

	Below, you'll see code that creates three different arrays. Arrays can hold anything, and the pieces of data an array holds do not have to be of the same type.

 */

var bears = ["oski", "polar bear", "winnie the pooh"];
console.log(bears);

var pi = [3, 1, 4, 1, 5, 9];
console.log(pi);

var favorites = ["burritos", 9, "CS"];
console.log(favorites);

// Try defining your own array below and printing it.

/* YOUR CODE HERE */






// 5. If Statements
/* If Statements

	Now that we can create variables, arrays, and objects, what do we do next? Control flows.

	Control Flows are ways for the computer to navigate through your code by reacting to certain conditions. Without proper control flow, it would be impossible to program a self-driving car or land a rocket.

	One type of control flow is the if/else statement. Examine the block of code below. The if/else statement is structured so that there is always a condition following the "if" keyword. In our example, the condition is outside === "raining".

	If the condition is true, the code in the first set of curly braces following the condition will be executed, and the code in the second set of curly braces following the "else" keyword will not be executed. If the condition is instead false, the opposite happens. The code in the first set of braces will not be executed while the code in the second set will.

	Before running the code, predict what this block of code will print!

 */

var outside = "raining";
console.log(outside === "raining");

if (outside === "raining") {
	console.log("I'm bringing an umbrella!");
} else {
	console.log("I'm not bringing an umbrella.");
}

// Write your own if/else statement below!

/* YOUR CODE HERE */





// 6. Loops
/* Loops

	Sometimes we want to execute the same block of code more than once. Imagine wanting to print out "I scream for ice cream!" 5 times (because that's just how much we love ice cream). That would get tedious really quickly.

	Loops can help us solve that problem. If you ever need to run certain operations repeatedly, be sure to use a loop! It'll make your life a lot easier.

	There are two flavors of loops that we will learn today, the for-loop and the while-loop.

 */

console.log("I scream for ice cream!");
console.log("I scream for ice cream!");
console.log("I scream for ice cream!");
console.log("I scream for ice cream!");
console.log("I scream for ice cream!");


/* This is a while-loop.

	While-loops are created with the "while" keyword. What follows is a condition. The code in the loop executes repeatedly as long as the condition is met.
 */

var i = 0;
while (i < 5) {
	console.log(i);
	console.log("I scream for ice cream!");
	i = i + 1;
}

//	As you write while-loops, make sure that your loop eventually terminates. For example, in the code above, if the line i = i + 1 was removed, our loop would never terminate because we are not changing the value of i.


/* This is the for-loop. Notice the structure of the code. It starts with the keyword "for" and is followed by three statements in a pair of parentheses.

	The 1st statement is executed once before the loop starts

	The 2nd statement is the condition for running the loop. The block of code in the loop is only executed if the condition is true. If the condition is not met, the loop ends.

	The 3rd statement is executed each time after the code in the loop finishes executing.

	In the example below, we design the loop so that there is a variable called 'i' that keeps track of how many times we have entered the loop. It starts at 0, and after each console.log() statement, we add one to 'i'. The loop ends once 'i' reaches 5.

*/

for (var i = 0; i < 5; i = i + 1) {
	console.log(i);
	console.log("I scream for ice cream!");
}


// Let's say I have an alarm clock that goes off every 10 minute starting at 7:00 AM. However I keep snoozing until 7:30 AM. How can we model this behavior using code?

/*

var time = 0;
while (time <= 30) {
    console.log("Alarm rings "+str(time)+" minute(s) after 7 AM");
    time = time + 10;
}
console.log("Time to get up for real");

*/







// 7. Functions
/* Functions

    In some situations we may want to perform the same type of operation many times where a loop may not be the most appropriate.

    It may be more practical to write one block of code that we can call whenever we want, with different parameters even. These are called functions, and there are several ways to define and use them. Look below for a couple examples.
 */


// In this example, the function's name is happy_birthday with a parameter "name". This function prints out "Happy birthday (name)!". Replace "Oski" with your own name.
function happy_birthday(name) {
  console.log("Happy birthday " + name + "!");
}

happy_birthday("Oski");


// Here, we've defined a multiply function that takes in two variables called x and   y and returns x * y.

function multiply(x, y) {
  return x * y;
}

// To call the function, we pass need to pass in values for x and y. Here, we choose 3 and 4.
multiply(3, 4);

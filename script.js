

// =========================================================================================================================

/* TOPIC 4rd => Template Literals

let user1 = "Shivam";
document.write("hello " + user1 + " how are you");

//Now by using template literals

let user = "Shivam"
document.write(`hello ${user} how are you`);

=> it is clear that its more redable then the above method with less conplexcity.

We can also add mutiple variable

let name = "shivam";
let enrollmentnumber = "161b291";
document.write(`The rollnumber of ${name} is ${enrollmentnumber}`);


//we can also reture an varibale
let name1 = "shivam";
let enrollmentnumber2 = "161b291";
let final = `The rollnumber of ${name1} is ${enrollmentnumber2}`;
document.write(final);
*/

// ========================================================================================================================

/* TOPIC 5rd => Arrow functions

function hello|(){
  console.log("hello Shivam")
}
hello();

now by using  arrow function also known as fat arrow function

let hello=() => console.log("hello");
hello(); -> for single line of code

// for multiple line of code

let welcome = (name, age) =>
  `Hello & welcome ${name} your age ${age} im right?`

console.log(welcome("Shivam", 25));
document.write(welcome("Shivam", 25));
welcome();

Advantages of Arrow Functions
Arrow functions reduce the size of the code.
The return statement and function brackets are optional for single-line functions.
It increases the readability of the code.
Arrow functions provide a lexical this binding. It means, they inherit the value of “this” from the enclosing scope.
This feature can be advantageous when dealing with event listeners or callback functions where the value of “this” can be uncertain.

Limitations of Arrow Functions
Arrow functions do not have the prototype property.
Arrow functions cannot be used with the new keyword.
Arrow functions cannot be used as constructors.
These functions are anonymous and it is hard to debug the code.
Arrow functions cannot be used as generator functions that use the yield keyword to return multiple values over time.
*/

// ========================================================================================================================
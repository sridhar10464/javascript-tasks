console.log("hello world");

let x;
let y;
let z;
let d;

console.log(x, y, z, d);

// Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstName = "John";
var lastName = "Smith";
var maritalStatus = "Married";
var country = "USA";
var age = 30;


console.log(firstName);
console.log(lastName);
console.log(maritalStatus);
console.log(country);
console.log(age);

// Declare variables to store your first name, last name, marital status, country and age in single line

let 
FirstName = 'John', 
LastName = 'Doe', 
MaritalStatus = 'single', 
Country = 'USA', 
Age = 35;
console.log(FirstName, LastName, MaritalStatus, Country, Age);

// Declare variables and assign string, boolean, undefined and null data types and console

// I am 25 years old. 
// You are 30 years old.

let age1 = 25;
let age2 = 30;
let name;
let isStudent = true;

console.log(age1); //25
console.log(age2); //30
console.log(name); //undefined
console.log(isStudent); //true

// convert the string to integr
// parseInt()

let str = "10";

let num = parseInt(str);

console.log(num); // Output: 10

// Number()
let string = '123'

let number = Number(string)

console.log(number) // 123

// Plus sign(+)
// The plus sign (+) does not convert a string to an integer.

// Simple Programs todo for operators

// swapping 2 numbers
//Declare two variables
let a = 5;
let b = 10;

//Print the initial values of variables
console.log(`a is ${a} and b is ${b}`);

//Swap the values of a and b
let temp = a;
a = b;
b = temp;

//Print the swapped values of a and b
console.log(`a is ${a} and b is ${b}`);

// Simple Programs todo for Condition , Looping and Arrays
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 1; i <= 7; i++) {
    let hashtag = "";
    for (let j = 0; j < i; j++) {
      hashtag += "#";
    }
    console.log(hashtag);
  }

//   Iterate through the string array and print it contents

  var strArray= ["<option>Jazz</option>",
  ,"<option>Blues</option>",
  ,"<option>New Age</option>",
  ,"<option>Classical</option>",
  ,"<option>Opera</option>"]

for (let i = 0; i < strArray.length; i++) {
console.log(strArray[i]);
}

// write a code to count the elements in the array . Don’t use length property

// Declare an empty array;
var myarray=[11,22,33,44,55];
let count = 0;

//Loop through the array 
for(let i = 0; i < myarray.length; i++){
    count++;
}

//Print the count
console.log(count);

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods=[
    "sushi",
    "taco",
    "pizza",
    "burrito",
    "pho",
    "ramen",
    "burger",
    'falafel',
    "curry",
    "pad thai",
    "bbq ribs",
    "gyro",
    "lasagna",
    "chicken marsala",
    "chili",
    "coconut shrimp",
    "quesadilla",
    "meatloaf",
    "spaghetti and meatballs",
    "enchiladas"
];

console.log(foods);

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {

}
}

dataHandling(friends);

// friends[0] = "Munnabai";

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

const Friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {

}
}

dataHandling(friends);
for (let i = 0; i < friends.length; i++) {
    if (friends[i] === "CaptianAmerica") {
      break;
    }
    console.log(friends[i]);
  }

//   Find the person is ur friend or not.

  const friend = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
  ];
  
  function dataHandling(input, name){
  for (var i = 0; i < input.length; i++) {
  
  }
  }
  
  let found = dataHandling(friend,"Jeff");
  
  console.log(found);
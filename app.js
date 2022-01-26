let name = "Quinton";
// The variable contains a name
const statesNum = 50;
// The constant contains the number of states which is a constant amount.
let numAdd = function (num1, num2) {
  return num1 + num2;
}
console.log(numAdd(5, 4));
// Function that adds two numbers and places them in a variable which can be invoked.

function sayHello(){
    alert("Hello World!");
}
sayHello() 

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
}

(checkAge("Charles", 21));
(checkAge("Abby", 27));
(checkAge("James", 18));
(checkAge("John", 17));


let favVegatables = ["Corn", "Potatoes", "Broccoli", "Green_Beans", "Cauliflower"];

for (let i = 0; i < favVegatables.length; i++) {
  console.log(favVegatables[i]);
}

let pet = { "name": "chauncey", "breed": "beagle" }
console.log(pet);

let people = [
  {
    name: "Michael",
    age: 21
  },
  {
    name: "Sarah",
    age: 18
  },
  {
    name: "Erica",
    age: 24
  },
  {
    name: "Stephen",
    age: 16
  },
  {
    name: "Lauren",
    age: 20
  }
];


function getLength(word) {
  return  word.length;
}

let stringLength = getLength("Hello World");

if (stringLength % 2 === 0) {
  console.log("The number is even!!!");
} else {
  console.log("The number is odd!!!");
}



















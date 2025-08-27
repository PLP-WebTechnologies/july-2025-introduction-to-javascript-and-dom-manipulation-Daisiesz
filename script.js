// Par 1: Js Basics
let topic = "Javascript Basics";

// Arithmetic Operations
console.log(10 + 50); //Addition
console.log(100 - 33); //Subtraction
console.log(70 * 13); //Multiplication
console.log(800 / 40); //Division
console.log(7 % 693); //Modulus(Remainder)

// const
const month = "August";
console.log("I started learning JavaScript in " + month);

// comparison
console.log(10 == 10); //Equal to
console.log(10 === "10"); //Strict Equal to
console.log(10 != 5); //Not Equal to
console.log(10 > 5); //Greater than
console.log(10 < 5); //Less than

// If else statements
let session = 10;

if (session == 10 ) {
    console.log("I attended the morning session.");
} else {
    console.log("I missed the first session.");
}

// Part 2: Functions
function greet(name) {
    console.log("Hello " + name + "!");
}

greet("Jeff");
greet("Jane");

// Function expression
const celebrate = function(name) {
    console.log("Happy learning " + name + "!");
};

celebrate("Joy");

// Arrow Function
const motivate = (name) => {
    console.log("Keep showing up " + name + "!");
};

motivate("Lertuse");

//Parameters & Return Values
function add(a, b) {
    return a + b;
}

console.log(add(5, 10));
console.log(add(20, 30));

//Part 3: Js Loops
//Increament 
for (let a = 1; a <= 5; a++) {
    console.log("Number: " + a);
}

// Decreament
for (let a = 5; a >= 0; a--) {
    console.log(a);
}
console.log("You did it!");

// Skip a value
for (let a = 0; a <= 20; a += 4) {
    if (a == 16) {
        continue;
    }
    else{console.log(a);
}}

// Stop the loop
for (let a = 0; a <= 10; a += 2) {
    if (a == 6) {
        break;
    }
    else{console.log(a);

    }}

//3b: While loop
let progress = 0;
while (progress <= 100) {
    console.log("Here's your score: " + progress + " keep going!");
    progress += 30;
}

//3c: forEach
let list = ["This", "is", "amazing!"];
list.forEach(display);


function display(item) {
    console.log(item);
}

// Mastering DOM

//Changing an element
function startButton() {
    let title = document.getElementById("title");
    title.textContent = "Get ready for a new lesson!";
    title.style.color = "green";

    //Adding an element
    let newDiv = document.createElement("div");
    newDiv.textContent = "This is a dynamically created div!";
    document.body.appendChild(newDiv);
}
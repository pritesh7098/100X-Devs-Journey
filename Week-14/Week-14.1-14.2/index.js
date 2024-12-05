"use strict";
let x = 25;
console.log(x);
/* ******************************************************************************************** */
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("John Doe");
/* ******************************************************************************************** */
// so here you have to target which ECMA version you want to use for your application and after that when u convert ur ts code to js then if its new version which supports new things then this is as it is if not then it convert the code according to older versions.
// most of the time the browsers are supported the 2015-16 version and nowdays every browser is uptodate with new things all there.
let namaste = () => console.log("heyy pritesh ");
/* ******************************************************************************************** */
// Interfaces in TypeScript
// this is how we are getting an object as an argument
function greet2(user) {
    console.log(" hey " + user.name, " your role is " + user.role);
}
let user = {
    name: " pritesh",
    role: " SDE 1 ",
};
greet2(user);
/* ******************************************************************************************** */
// function to check if a no is even or odd
// primitives types and simple types ( kaam chalun jate but for the advance projects we need a interface and types )
function checking(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
checking(10);
// if u dont give type to the user2 then it does nothing but if u do then it becomes strict
let user2 = {
    name: "pritesh",
    age: 15,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
    },
};
// function to check if a user is legal to drink alcohol or not
let isLegal = (user2) => {
    if (user2.age >= 18) {
        return true;
    }
    else {
        return false;
    }
};
let finalAns = isLegal(user2);
if (finalAns) {
    console.log("Yeahh it is legal");
}
else {
    console.log("No legal");
}

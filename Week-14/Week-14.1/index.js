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
function greet2(user) {
  console.log(" hey " + user.name, " your role is " + user.role);
}
let user = {
  name: " pritesh",
  role: " SDE 1 ",
};
greet2(user);

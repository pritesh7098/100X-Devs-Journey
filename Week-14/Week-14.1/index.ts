let x: number = 25;
console.log(x);

/* ******************************************************************************************** */

function greet(name: string) {
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
function greet2(user: { name: string; role: string }) {
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

function checking(num: number): boolean {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

checking(10);

/* ******************************************************************************************** */

// interfaces and types in depth

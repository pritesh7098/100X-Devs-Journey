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

// Week - 14.2

// interfaces and types in depth

// Interface first letter should be capital always

// defining interface for the user interface
interface User {
  name: string;
  age: number;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    state: string;
  };
}

// if u dont give type to the user2 then it does nothing but if u do then it becomes strict

let user2: User = {
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

let isLegal = (user2: User): boolean => {
  if (user2.age >= 18) {
    return true;
  } else {
    return false;
  }
};

let finalAns = isLegal(user2);
if (finalAns) {
  console.log("Yeahh it is legal");
} else {
  console.log("No legal");
}

/* ******************************************************************************************** */

// 1)  Good stuff to practice and explore is how to make any key optional in ts interface.
// 2) how i dont repeat the things. like interfaces using interfaces.

/* *************************************************************************************************** */

// break

// Implementing interfaces with the classes
// for reusing code and dont writing things again and again

// also in real world if u define one inteface as a blueprint then with this bp u can create man classes as u want and this classes can have many obj associated with it. ( interesting things right)

/* interface myUser {
  name: string;
  age: number;
  hobbies: string[];
  greet(): string;
}

let myUser: myUser = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "painting"],
  greet: function (): string {
    return "Hello, my name is " + this.name;
  },
};
 */
// lets create a class which implements the above interface

/* class Person implements myUser {
  name: string;
  age: number;
  hobbies: string[];
  sex: string;

  constructor(name: string, age: number, hobbies: string[], sex: string) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;

    // also in class remember u can add new entries like adding new students but make sure this class already implementing the prev interface right so this is prerequisites to add atleast this thing or key valur pair here.

    this.sex = "Male"; // this is a new key added to the interface.
  }

  greet(): string {
    return "Hello, my name is " + this.name;
  }
} */

// u also dont need to add types agin and again nafter defining it in a interface with he trick called making it public like this

//constructor(public name: string, public age: number, public hobbies: string[], public sex: string) {

/* let manager = new Person("John Doe", 30, ["reading", "painting"], "male");
console.log(manager.greet());

let ceo = new Person("John Doe", 20, ["reading", "painting"], "male");
console.log(ceo.greet());
 */

// now with this u can add any person u want and dont have to write interfaces anymore and everytime as u are using class which implements one interface and the various objects are created with it.

/* ******************************************************************************************** */

// implement : means u are just implementing what is implemented already means just following the blueprint.

// extend : means u are just extending the blueprint and adding a thing on top of it.

/* ********************************************************************************************************* */

// common interview qution -
// 1) what is the difference between type and interface
// 2)what is the difference between abstract classes and interface ( need to explore)

/* ********************************************************************************************************* */

// Break

// TYPES in TypeScript

// Types are like blueprints or templates that you can use to create objects. They are used to describe the structure and behavior of different values.

// follow the note by dailycode.com


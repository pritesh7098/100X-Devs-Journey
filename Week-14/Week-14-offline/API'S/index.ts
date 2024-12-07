// trial

//console.log("heyy");

/* **************************************************************************************************************** */

// Advanced TS APIs

// 1) Pick - nothing bt a generic which is use to pick/select only specific elements from interface or type which we have to use repeatedly

/* interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, "name" | "email">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
}; */

// my example to understand a pick API which is generic in ts.

/* interface Baccha {
  rollno: number;
  name: string;
  age: number;
}

// For student records, only pick `rollno` and `name`

type StudentRec = Pick<Baccha, "rollno" | "name">;

let studentRec = (stu: StudentRec) => {
  console.log(
    `student roll no is : ${stu.rollno} and student name is ${stu.name}`
  );
}; */

// so with this in a cleaner way we have selected the fields that we only want rather than passing many arg again and again.

/* **************************************************************************************************************** */

// 2) Partial
// Certainly! The Partial utility type in TypeScript is used to make all properties of a given type optional. This can be particularly useful when you want to update an object but only need to provide a subset of its properties.

/* interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

function updateProduct(product: Product, updates: Partial<Product>): Product {
  return { ...product, ...updates };
}

// Usage
const product: Product = {
  id: 101,
  name: "Laptop",
  price: 999.99,
  description: "A high-performance laptop",
  inStock: true,
};

const updatess: Partial<Product> = {
  price: 899.99,
  inStock: false,
};

const updatedProduct = updateProduct(product, updates);
console.log(updatedProduct);
 */
// so in this case we just have to update some thing not an whole product thats why we have used Partial

/* **************************************************************************************************************** */

// 3) Readonly

/* interface Secrets {
  apiEndpoint: string;
  onlyFansPassword: number;
} */

/* let myCred: Secrets = {
  apiEndpoint: "localhots:3000",
  onlyFansPassword: 26112001,
}; */

// in this case it let me change this pass as i am changing the value inside an obj bt this not safe .

//myCred.onlyFansPassword = 123;

// thats why readonlt used to protect thing that u cant change constants be it obj or its values.

/* let myCred: Readonly<Secrets> = {
  apiEndpoint: "localhots:3000",
  onlyFansPassword: 26112001,
}; */

// myCred.onlyFansPassword = 123 // cannot change

/* **************************************************************************************************************** */

// 4) Record and Map
// record basically provides an cleaner way to write objects

/* // normal approach

interface RecordUser {
  id: string;
  name: string;
}

type Users = { [key: string]: RecordUser };

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

// record approach 

type Users2 = Record<string,RecordUser>

const users2: Users2 = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};


console.log(users2['abc123']); */

// Map
// cleaner way to deal with the objects like in c++

interface User3 {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User3>();

// Add users to the map using .set
usersMap.set("abc123", { id: "abc1234", name: "John Doe2" });
usersMap.set("xyz789", { id: "xyz7898", name: "Jane Doe2" });

// Accessing a value using .get
console.log(usersMap.get("abc123")); // Output: { id: 'abc123', name: 'John Doe' }

/* **************************************************************************************************************** */

// 5) Exclude
// when u want to exclude any value from a given type

type Events = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<Events, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK
//handleEvent("scroll"); // error bcz scroll is excluded here

/* **************************************************************************************************************** */


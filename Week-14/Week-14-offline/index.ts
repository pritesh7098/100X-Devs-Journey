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

interface Baccha {
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
};

// so with this in a cleaner way we have selected the fields that we only want rather than passing many arg again and again.

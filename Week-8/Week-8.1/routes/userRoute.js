const express = require("express");
const { Router } = require("express");
const { userModel } = require("../db");
const { jwt } = require("jsonwebtoken");
const { USER_JWT_KEY } = require("../config");
const userRouter = Router();

const app = express();
app.use(express.json());
userRouter.post("/signup", async function (req, res) {
  console.log(req.body); // Log the request body

  const { email, password, firstName, lastName } = req.body; // u can use another way also but it it good and short

  // handling error when nofield is provided

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // creating/ adding a new user entry in database

  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "User Signup Successfully ",
  });
});

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  // handling error when nofield is provided

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // the user which we have to check if he is registered on our db/site or not

  let user = await userModel.findOne({
    email,
    password,
  });

  // if user is is our database toh karo token generate bc

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      USER_JWT_KEY
    );

    res.json({
      message: "User Login Successfully",
      token: token,
    });
  } else {
    res.status(403).json({
      message: " Unauthorized user spotted bhag bc ",
    });
  }
});

module.exports = {
  userRouter: userRouter,
};

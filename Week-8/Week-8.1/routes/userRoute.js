const express = require("express");
const { Router } = require("express");
const { userModel } = require("../db");
const { jwt } = require("jsonwebtoken");
const JWT_KEY = "Pritesh70982001";

const userRouter = Router();

const app = express();
app.use(express.json());

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body; // u can use another way also but it it good and short

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

userRouter.post("/signin", function (req, res) {
  const { email, password } = req.body;

  // the user which we have to check if he is registered on our db/site or not

  let user = userModel.findOne({
    email,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_KEY
    );
  } else {
    res.status(403).json({
      message: " Unauthorized user spotted bhag bc ",
    });
  }

  res.json({
    message: "User Login Successfully",
  });
});

module.exports = {
  userRouter: userRouter,
};

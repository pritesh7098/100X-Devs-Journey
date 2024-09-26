const { Router } = require("express");
const { adminModel } = require("../db");
const { jwt } = require("jsonwebtoken");
const JWT_KEY = "PriteshAdmin70982001";

const adminRouter = Router();

adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body; // u can use another way also but it it good and short

  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "Admin Signup Successfully ",
  });
});

adminRouter.post("/signin", function (req, res) {
  const { email, password } = req.body;

  // the user which we have to check if he is registered on our db/site or not

  let user = adminModel.findOne({
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
      message: " Unauthorized Admin spotted bhag bc ",
    });
  }

  res.json({
    message: "Admin Login Successfully",
  });
});

adminRouter.post("/createCourses", function (req, res) {
  res.json({
    message: " Course creation successfully",
  });
});

module.exports = {
  adminRouter: adminRouter,
};

const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "Signup succeeded",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "Signup succeeded",
  });
});

userRouter.post("/purchase", function (req, res) {
  res.json({
    message: "Signup succeeded",
  });
});

module.exports = {
  userRouter: userRouter,
};

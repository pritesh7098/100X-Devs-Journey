const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: " Admin signup successfully",
  });
});

adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "Admin Signin successfully",
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

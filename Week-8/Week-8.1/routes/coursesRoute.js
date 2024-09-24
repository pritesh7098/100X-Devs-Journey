const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchaseCourse", function (req, res) {
  res.json({
    message: " fetch PurchasedCourse successfully",
  });
});

courseRouter.get("/seeAllCourses", function (req, res) {
  res.json({
    message: " see all courses",
  });
});
module.exports = {
  courseRouter: courseRouter,
};

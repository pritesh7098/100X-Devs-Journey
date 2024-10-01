const { Router } = require("express");
const { purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middlewares/userMiddleware");
const courseRouter = Router();

// this rooute is responsible for purchasing a course which is handle by user.

courseRouter.post("/purchaseCourse", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await purchaseModel.create({
    userId: userId,
    courseId: courseId,
  });

  res.json({
    message: "Purchasing a course Done Successfully",
  });
});

// this route is responsible for preview all the courses in the database.
// no need of middleware here
courseRouter.get("/preview", async function (req, res) {
  const previewCourse = await courseModel.find({});

  res.json({
    previewCourse,
    message: "Preview Purchased Course Successfully",
  });
});
module.exports = {
  courseRouter: courseRouter,
};

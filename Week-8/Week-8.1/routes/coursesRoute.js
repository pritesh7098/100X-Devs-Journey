const { Router } = require("express");
const courseRouter = Router();
const { courseModel, purchaseModel } = require("../db");

courseRouter.post("/purchaseCourse", function (req, res) {
  res.json({
    message: "Purchasing Done Successfully",
  });
});

courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "Preview Purchased Course Successfully",
  });
});
module.exports = {
  courseRouter: courseRouter,
};

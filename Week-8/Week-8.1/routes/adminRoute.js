const { Router } = require("express");
const { adminModel, courseModel } = require("../db");
const { jwt } = require("jsonwebtoken");
const { ADMIN_JWT_KEY } = require("../config");
const { AdminMiddleware } = require("../middlewares/AdminMiddleware");

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
        id: admin._id,
      },
      ADMIN_JWT_KEY
    );
    res.json({
      message: "Admin Login Successfully",
      token: token, // token will be sent in response with other data
    });
  } else {
    res.status(403).json({
      message: "Unauthorized Admin spotted bhag bc ",
    });
  }
});


// now this route will only be accessible by admin. for that we will use middleware to verify admin token.

adminRouter.post("/course", AdminMiddleware, async function (req, res) {
  const adminId = req.userId; // here adminId is nothing but id which is verified in admin middleware

  // basically we have to craete a new course and add it to databse as an admin

  const { title, description, price, imageUrl } = req.body;

  const course = await courseModel.create({
    title: title,

    description: description,

    price: price,

    imageUrl: imageUrl,

    creatorId: adminId, // this id will be the id of admin who created this course.
  });

  res.json({
    message: " Course creation successfully by Admin",
    courseId: course._id,
  });
});

// now this route basically updates the course details and it can only be update by a course creator.

adminRouter.put("/course", AdminMiddleware, async function (req, res) {
  const adminId = req.userId;

  const { title, description, imageUrl, price, courseId } = req.body;

  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    }
  );

  res.json({
    message: "Course updated",
    courseId: course._id,
  });
});

// now this route basically fetches the all the courses which creator has.

adminRouter.get(
  "/course/allcourses",
  AdminMiddleware,
  async function (req, res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
      creatorId: adminId,
    });

    res.json({
      message: "The courses this creator has access to is successfully fetched",
      courses: courses,
    });
  }
);

module.exports = {
  adminRouter: adminRouter,
};

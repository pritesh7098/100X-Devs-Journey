require("dotenv").config();
console.log(process.env.MONGO_URL);

const express = require("express");
const mongoose = require("mongoose");

const { courseRouter } = require("./routes/coursesRoute");
const { userRouter } = require("./routes/userRoute");
const { adminRouter } = require("./routes/adminRoute");

// main logic body

const app = express();

app.use(express.json()); // necessary to use this mw  as this routes requires the json data

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
  console.log("listening on port 3000");
}

main();

/* ********************************************************************************************************************************************************************* */

// there are many ways to do routing you can place all  at one place or do routes folder and import routes into index file.
// but most optimal way to do routing is to use express router for clean and maintanable code

const express = require("express");

const { courseRouter } = require("./routes/coursesRoute");
const { userRouter } = require("./routes/userRoute");
const { adminRouter } = require("./routes/adminRoute");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

const port = 3000;

app.listen(port);

/* ********************************************************************************************************************************************************************* */

// there are many ways to do routing you can place all  at one place or do routes folder and import routes into index file.
// but most optimal way to do routing is to use express router for clean and maintanable code

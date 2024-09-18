const express = require("express");

const app = express();

const port = 3000;

function isEligibleMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.json({
      msg: " padhai likhai karo IAS YAS bano ",
    });
  }
}

// either you can use it directly or you can have it for specific condition.

app.get("/", (req, res) => {
  res.json({
    msg: "homepage",
  });
});

app.use(isEligibleMiddleware);

app.get("/ride1", (req, res) => {
  res.json({
    msg: "you can watch naughty content 1",
  });
});

app.get("/ride2", (req, res) => {
  res.json({
    msg: "you can watch naughty content 2",
  });
});

app.listen(port, console.log(`Server is running on port ${port}`));

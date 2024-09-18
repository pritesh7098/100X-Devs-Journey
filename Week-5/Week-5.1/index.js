const express = require("express");

const app = express();

const port = 3000;

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.text({
    ans: a + b,
  });
});

app.get("/sub", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a - b,
  });
});

app.get("/mul", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a * b,
  });
});

app.get("/divide", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a / b,
  });
});

app.listen(port, console.log(`Server is running on port ${port}`));

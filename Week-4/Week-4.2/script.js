// creating http server with express

const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.send("This is some data");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

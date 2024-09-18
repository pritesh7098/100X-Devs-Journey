/* # Assignments on middleware

Try these out yourself.

1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it */

/* const express = require("express");
//const cors = require("cors");
const app = express();

const port = 3000;

//app.use(cors()); // to allow cross-origin requests

function whichHttpMethod(req, res, next) {
  const method = req.method; // prints which HTTP method we are hitting
  const url = req.url; // prints the url we are hitting
  const timestamp = new Date().toTimeString(); // prints timestamp when we hitting
  console.log(`method:${method}`);
  console.log(`url:${url}`);
  console.log(`timestamp:${timestamp}`);
  next(); // its important fun to move fwd things
}

// either you can use it directly or you can have it for specific condition.

app.use(whichHttpMethod);

app.get("/home", function (req, res) {
  res.json({
    msg: "we have printed method, url, timestamp successfully ",
  });
});

app.listen(port, console.log(`Server is running on port ${port}`)); */

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//

/* const express = require("express");
//const cors = require("cors");
const app = express();

const port = 3000;

//app.use(cors()); // to allow cross-origin requests

let requestCount = 0;

// created an middleware to count the no of req after hitting the respective url's
function totalReq(req, res, next) {
  requestCount = requestCount + 1;

  next(); // its important fun to move fwd things
}

app.use(totalReq);

app.get("/home", function (req, res) {
  res.json({
    msg: "success ",
  });
});

app.get("/request", function (req, res) {
  res.json({
    msg: `request count is : ${requestCount}`,
  });
});

app.listen(port, console.log(`Server is running on port ${port}`));
 */

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//

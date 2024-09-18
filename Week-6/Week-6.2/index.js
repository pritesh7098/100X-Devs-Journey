const express = require("express");
const jwt = require("jsonwebtoken"); // importing jwt dependency
const JWT_SECRET = "pritesh70982001";

const app = express();
app.use(express.json()); // middleware for json data

const users = [];

// route when you hit / endpoint it goes to FE of a website

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/Frontend/index.html");
})

// signup route for creating account for user
app.post("/signup", function (req, res) {
  const userName = req.body.userName;
  const password = req.body.password;

  users.push({
    userName,
    password,
  });

  res.json({
    msg: "Account created successfully",
  });
});

// signin route for signing only those users which have already signed up
app.post("/signin", function (req, res) {
  const userName = req.body.userName;
  const password = req.body.password;

  // checking if the user exists in the database (users array)
  let foundRegisteredUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName === userName && users[i].password === password) {
      foundRegisteredUser = users[i];
    }
  }

  // if user not found
  if (!foundRegisteredUser) {
    res.json({
      msg: "You have entered incorrect credentials",
    });
    return;
  }

  // else generate the new token for registered user with credentials and your secret key
  const generatingNewToken = jwt.sign(
    {
      userName,
    },
    JWT_SECRET
  );

  res.json({
    token: generatingNewToken, // response with our newly generated token
  });
});

// creating an auth middleware function to check if the user is authenticated or not
function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.userName) {
      req.userName = decodedData.userName;
      next();
    } else {
      res.status(401).json({
        message: "You are not a verified user in our database",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
}

// hitting a /me endpoint, which should be private after logging in with valid credentials
app.get("/me", auth, function (req, res) {
  let foundRegisteredUser = null;
  const currentUser = req.userName;

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName === currentUser) {
      foundRegisteredUser = users[i];
    }
  }

  if (foundRegisteredUser) {
    res.json({
      userName: foundRegisteredUser.userName,
      password: foundRegisteredUser.password,
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

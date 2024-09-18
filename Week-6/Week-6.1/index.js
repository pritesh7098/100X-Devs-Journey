// understanding Tokens and JWT's For an authentications

const express = require("express");
const jwt = require("jsonwebtoken"); // importing jwt dependency
JWT_SECRET = "pritesh7098";

const app = express();
app.use(express.json()); // middleware for json data

const users = [];

app.post("/signup", function (req, res) {
  const userName = req.body.userName;
  const password = req.body.password;

  users.push({
    userName,
    password,
  });

  res.json({
    msg: "you are signed in successfully",
  });
});

app.post("/signin", function (req, res) {
  const userName = req.body.userName;
  const password = req.body.password;

  // an array for checking if the user exist in our databse or not ( tip : you always have to use Databases to store and check the things but for now we used a local array. )

  let foundRegisteredUSer = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName === userName && users[i].password === password)
      foundRegisteredUSer = users[i];
  }

  // if user not found

  if (!foundRegisteredUSer) {
    res.json({
      msg: " you have entered incorrect credentials",
    });

    return;
  }

  // else generate the new token for registerd user
  else {
    const generatingNewToken = jwt.sign(
      {
        userName,
      },
      JWT_SECRET
    );

    res.json({
      token: generatingNewToken, // response with our newly generated token
    });
  }
});

// hitting an me endpoint
app.get("/me", function (req, res) {
  const token = req.headers.token; // jwt
  const decodedInformation = jwt.verify(token, JWT_SECRET); // {username: "harkirat@gmail.com"}
  //const unAuthDecodedinfo = jwt.decode(token); // {username: "harkirat@gmail.com"}
  const userName = decodedInformation.userName;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName === userName) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    res.json({
      userName: foundUser.userName,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "token invalid",
    });
  }
});

app.listen(3000);

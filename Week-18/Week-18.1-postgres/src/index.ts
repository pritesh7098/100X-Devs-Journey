import { Client } from "pg"; // importing pg lib

// same as defining express we create a object/instance from a class Client.
// either u can put string or a whole object.

/* let client = new Client(
// connection string here

);

// basic fun to connect with the database and querying the database.

async function main() {
  await client.connect();
  const res = await client.query("select * from users");
  console.log(res.rows);
}

main(); */

/* **************************************************************************************************** */

// Create a simple Node.js app that lets you put data
// Create a function that let’s you insert data into a table. Make it async, make sure client.connect resolves before u do the insert

// Async function to insert data into a table
/* async function insertData() {
  const client = new Client(
// connection string here

  );

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('Mami', 'Mami@example.com', 'mami_password123');";
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();
 */

/* **************************************************************************************************** */

// Create a simple Node.js todo app with postgresql like when the user signup with his cred the cred will store in our pg db

/* import express from "express";

const app = express();
app.use(express.json());

// Connect to the PostgreSQL database
const pgClient = new Client(

// connection string here


);

pgClient.connect();

// Create a new user

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  try {
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`;

    const response = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);

    res.json({
      message: "You have signed up successfully ",
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "Error while signing up",
    });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
 */

/* **************************************************************************************************** */

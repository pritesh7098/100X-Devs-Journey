import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

// Connect to the PostgreSQL database
const pgClient = new Client(
  "postgresql://neondb_owner:7K1HJntqVWBG@ep-restless-heart-a5humq7n.us-east-2.aws.neon.tech/neondb?sslmode=require"
);

pgClient.connect();

// Create a new user
app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  try {
    // Start a transaction
    await pgClient.query("BEGIN");

    // Insert user into the users table
    const insertUserQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
    const userResult = await pgClient.query(insertUserQuery, [
      username,
      email,
      password,
    ]);
    const userId = userResult.rows[0].id;

    // Insert a default todo item for the new user
    const insertTodoQuery = `INSERT INTO todos (user_id, description) VALUES ($1, $2);`;
    await pgClient.query(insertTodoQuery, [
      userId,
      "Welcome to your todo list!",
    ]);

    // Commit the transaction
    await pgClient.query("COMMIT");

    res.json({
      message:
        "You have signed up successfully and a default todo item has been created.",
    });
  } catch (e) {
    // Rollback the transaction in case of error
    await pgClient.query("ROLLBACK");
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

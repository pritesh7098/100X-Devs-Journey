"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg"); // importing pg lib
// same as defining express we create a object/instance from a class Client.
// either u can put string or a whole object.
/* let client = new Client(
  "postgresql://neondb_owner:7K1HJntqVWBG@ep-restless-heart-a5humq7n.us-east-2.aws.neon.tech/neondb?sslmode=require"
);
// connection string here

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
    "postgresql://neondb_owner:7K1HJntqVWBG@ep-restless-heart-a5humq7n.us-east-2.aws.neon.tech/neondb?sslmode=require"
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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Connect to the PostgreSQL database
const pgClient = new pg_1.Client("postgresql://neondb_owner:7K1HJntqVWBG@ep-restless-heart-a5humq7n.us-east-2.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();
// Create a new user
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`;
        const response = yield pgClient.query(insertQuery, [
            username,
            email,
            password,
        ]);
        res.json({
            message: "You have signed up successfully ",
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error while signing up",
        });
    }
}));
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
/* **************************************************************************************************** */

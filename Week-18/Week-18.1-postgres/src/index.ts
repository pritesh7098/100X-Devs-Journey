import { Client } from "pg"; // importing pg lib

// same as defining express we create a object/instance from a class Client.
// either u can put string or a whole object.

let client = new Client(
  "postgresql://neondb_owner:7K1HJntqVWBG@ep-restless-heart-a5humq7n.us-east-2.aws.neon.tech/neondb?sslmode=require"
);

// basic fun to connect with the database and querying the database.

async function main() {
  await client.connect();
  const res = await client.query("select * from users");
  console.log(res.rows);
}

main();


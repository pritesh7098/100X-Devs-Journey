// client should be generated from the schema then he will know that ki user has a thing bcz its in the schema and the client should be generated from it.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// nodeJS code to Create a new user with prisma client rather than Sql Queries with pgClient

async function main() {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: "priteshClient",
        email: "pritesh@gmail.com",
        password: "123",
        city: "Shirdi",
      },
    });

    console.log(`Created user with ID: ${newUser.id}`);
  } catch (e) {
    console.error("Error creating user:", e);
  }
}

main();

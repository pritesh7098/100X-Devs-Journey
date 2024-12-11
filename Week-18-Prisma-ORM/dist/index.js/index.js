"use strict";
// client should be generated from the schema then he will know that ki user has a thing bcz its in the schema and the client should be generated from it.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// nodeJS code to Create a new user with prisma client rather than Sql Queries with pgClient
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield prisma.user.create({
                data: {
                    name: "priteshClient",
                    email: "pritesh@gmail.com",
                    password: "123",
                    city: "Shirdi",
                },
            });
            console.log(`Created user with ID: ${newUser.id}`);
        }
        catch (e) {
            console.error("Error creating user:", e);
        }
    });
}
main();

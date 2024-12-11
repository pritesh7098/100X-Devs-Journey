"use strict";
// Create a simple Node.js todo app with postgresql like when the user signup with his cred the cred will store in our pg db
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
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Connect to the PostgreSQL database
const pgClient = new pg_1.Client("postgresql://neondb_owner:7K1HJntqVWBG@ep-restless-heart-a5humq7n.us-east-2.aws.neon.tech/neondb?sslmode=require");
// connection string here
pgClient.connect();
// Create a new user
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const user_id = req.body.user_id;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        // for users
        /* const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`;
    
        const response = await pgClient.query(insertQuery, [
          username,
          email,
          password,
        ]); */
        // for address
        const insertAddressQuery = `INSERT INTO addresses (user_id, city, country, street, pincode)
    VALUES (1, 'shirdi', 'In', '123 Shirdi rd', '10001');`;
        const addResponse = yield pgClient.query(insertAddressQuery, [
            user_id,
            city,
            country,
            street,
            pincode,
        ]);
        /* const getDetails = `SELECT city, country, street, pincode
    FROM addresses
    WHERE user_id = 1;`;
    
        console.log(getDetails); */
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

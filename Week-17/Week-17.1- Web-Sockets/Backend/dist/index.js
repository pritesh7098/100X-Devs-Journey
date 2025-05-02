"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
console.log("WebSocket server is running on ws://localhost:8080");
// message from server to the postman client
wss.on("connection", function (socket) {
    console.log("user connectedd");
    /*  setInterval(() => {
       socket.send("heyyy my roll no is : " + Math.random());
     }, 500);
    */
    // ping pong example
    socket.on("message", (e) => {
        console.log(e.toString());
        console.log(e.toString() === "Hi Pritesh");
        if (e.toString() === "Hi Pritesh") {
            socket.send("Hi Cutie");
        }
    });
}); // so when the client send "ping" , so server has to respond with "pong"

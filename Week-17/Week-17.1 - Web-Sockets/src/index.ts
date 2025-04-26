import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
console.log("WebSocket server is running on ws://localhost:8080");

// message from server to the postman client

wss.on("connection", function (socket) {
  console.log("user connectedd");
  setInterval(() => {
    socket.send("heyyy my roll no is : " + Math.random());
  }, 500);

  // message from client to the server

  socket.on("message", (e) => {
    console.log(e.toString());
  });
});

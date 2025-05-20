"use strict";
/* // Things are going top of head so ,

import { WebSocketServer, WebSocket } from "ws";

const myWebSocketSer = new WebSocketServer({ port: 8000 }); // created  a ws server

interface user {
  socket: WebSocket;
  room: string;
}

let allSockets: user[] = []; // created a global array for storing all clients/socket at one place only.

myWebSocketSer.on("connection", (socket) => {
  console.log("Client connection is established successfully ");

  // the msg we are sending from a client(postman) to server is caught over here
  socket.on("message", (msg) => {
    try {
      const parsedMessage = JSON.parse(msg as string); // parsing the JSON-string into an object.
      // msg is reccived with room ID and push to the global array
      if (parsedMessage.type == "join") {
        console.log(
          "user joined room successfully" + parsedMessage.payload.roomId
        );

        allSockets.push({
          socket,
          room: parsedMessage.payload.roomId,
        });
      } else if (parsedMessage.type === "chat") {
        console.log("User wants to chat .....");

        // now if the person wants to chat , we have to check from which room he belongs to

        let currentUserRoom = null;

        for (let i = 0; i < allSockets.length; i++) {
          if (allSockets[i].socket == socket) {
            currentUserRoom = allSockets[i].room;
          }
        }

        // so the sockets/clients which are connected to the particular room having a roomID let's send a message to all of them.

        for (let i = 0; i < allSockets.length; i++) {
          if (allSockets[i].room === currentUserRoom) {
            allSockets[i].socket.send(parsedMessage.payload.message);
          }
        }
      }
    } catch (error) {
      console.error("Failed to parse message", error);
    }
  });

  socket.on("close", () => {
    allSockets = allSockets.filter((user) => user.socket !== socket);
  });
});
  */
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const myWebSocketSer = new ws_1.WebSocketServer({ port: 8000 });
let allSockets = [];
myWebSocketSer.on("connection", (socket) => {
    console.log("Client connection is established successfully");
    socket.on("message", (msg) => {
        try {
            const parsedMessage = JSON.parse(msg);
            if (parsedMessage.type === "join") {
                // Corrected the type comparison
                console.log("User joined room successfully: " + parsedMessage.payload.roomId);
                allSockets.push({
                    socket,
                    room: parsedMessage.payload.roomId,
                });
            }
            else if (parsedMessage.type === "chat") {
                console.log("User wants to chat .....");
                let currentUserRoom = null;
                for (let i = 0; i < allSockets.length; i++) {
                    if (allSockets[i].socket === socket) {
                        currentUserRoom = allSockets[i].room;
                        break; // Exit loop once the room is found
                    }
                }
                if (currentUserRoom) {
                    // Check if the user is in a room
                    for (let i = 0; i < allSockets.length; i++) {
                        if (allSockets[i].room === currentUserRoom) {
                            allSockets[i].socket.send(parsedMessage.payload.message);
                        }
                    }
                }
                else {
                    console.error("User is not in any room");
                }
            }
        }
        catch (error) {
            console.error("Failed to parse message", error);
        }
    });
    socket.on("close", () => {
        allSockets = allSockets.filter((user) => user.socket !== socket);
    });
});

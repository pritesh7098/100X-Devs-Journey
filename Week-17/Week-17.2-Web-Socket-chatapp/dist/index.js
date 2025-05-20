"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const myWebSocketSer = new ws_1.WebSocketServer({ port: 8000 }); // created  a ws server
let userCount = 0;
// global allSocket array for  => when a new socket/client is connected it gets push to this array and we have all the client track at one place.
let allSocket = [];
myWebSocketSer.on("connection", (socket) => {
    allSocket.push(socket);
    userCount = userCount + 1;
    console.log("User connected Succesufully #" + userCount);
    // now we need a handler like when we reccivee a message from a client we will transfer it accordingly.
    // also this is how server can reccive a message from a client.
    socket.on("message", (msg) => {
        console.log("message reccived : " + msg.toString());
        // so in this way when client send us a msg the server reccives it and prints it on a  console for my understanding.
        /* ****************************** */
        // now if we want to send some message from server to client we use socket.send in this case. -> in this we send the message that we have already reccived from a client.
        /*  setTimeout(() => {
          socket.send(msg.toString() + " : sent from the  server ");
        }, 2000); */
        // okk, now in above ex we have send response to the client as it is, if we have to send response to all the client connectted to the same wss then we need to :
        for (let i = 0; i < allSocket.length; i++) {
            const s = allSocket[i];
            s.send(msg.toString() + " : sent from the  server ");
        }
    });
});
//   \|/
// So my hopescotch is not working right now , next time when you sit for lec connect hopescotch and cross check the code like diff clients are connected to one server or not and the message is seen by both the clients at place, and after that just moove forward and try to code a client side code for the application. Timeline : 39.31 .

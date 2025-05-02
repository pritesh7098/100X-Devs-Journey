import { WebSocketServer } from "ws"; // here we have used ws library from npm to create our ws server bt there are other ways as well.

const wss = new WebSocketServer({ port: 8080 });
console.log("WebSocket server is running on ws://localhost:8080"); // created ws on port 8080

// message from server to the postman client ( on postman client the msg gets printed )

wss.on("connection", function (socket) {
  console.log("user connectedd");
  /*   setInterval(() => {
    socket.send("heyyy my roll no is : " + Math.random());
  }, 1000); // every one second print my roll no as random. 
}); */

  // ping pong example

  socket.on("message", (e) => {
    console.log(e.toString());
    console.log(e.toString() === "Hi Pritesh");

    if (e.toString() === "Hi Pritesh") {
      socket.send("Hi Cutie");
    }
  });
}); // so when the client send "ping/any msg" , so server has to respond with "pong/any msg "

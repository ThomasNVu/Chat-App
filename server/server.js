import express from "express"; // Allows for Get/Post using express
import { createServer } from "node:http"; // Use Node's builtin HTTP server to connect to Socket.io
import { Server } from "socket.io"; // Socket is used for real time server handling
import cors from "cors"; // Allow React to talk to backend though an open port

const app = express(); // Creates express app

app.use(cors()); // Allow for backend to accept request from other origns (cors)

const server = createServer(app); // Creates an HTTP and hook it up to express

const io = new Server(server, {
  // Creates a Socket.io and hooks it up to the HTTP from earlier
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

import express from "express";
import cors from "cors";
import {router} from "./routes.js";
import http from "http";
import {Server} from "socket.io";
import path from "path";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json())
app.use(cors());
app.use("/api/v1", router);
app.use("/public", express.static(path.resolve("./public")))

const server = http.createServer(app);

export const io = new Server(server);

export let client = {}

io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);
    client = socket;

    client.on("disconnect", () => {
       client = {};
    })
});


server.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/api/v1`);
})


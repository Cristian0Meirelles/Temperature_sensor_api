import { client, io } from "../index.js";

export class DataSaveController {
    async execute (req, res) {;
        const {temperature} = req.body;

        if (client.id) {
            io.to(client.id).emit("temperature", temperature);
        } else {
            console.log(temperature);
        }
        
    }
}
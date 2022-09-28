import { Router } from "express";
import {DataSaveController} from "./service/index.js";
import path from "path";

const router = Router();

router.post('/send', (req, res) => {;
    return DataSaveController.execute(req, res);
});

router.get("/",(req, res) =>{
    return res.sendFile(path.resolve("./index.html"));
});

export {router}
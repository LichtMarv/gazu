import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use("/static",express.static("static"))


app.get("/", (req,res) => {
    res.sendFile("index.html",{root:__dirname});
});

app.listen(8080)
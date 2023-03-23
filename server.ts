import express, { Express } from "express";
import cors from "cors";
import { engine } from "express-handlebars";

const server: Express = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 1112;
server.listen(PORT, () => console.log(`server running on port  ${PORT}`));

// git checkout -B template
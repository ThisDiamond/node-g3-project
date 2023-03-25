import express, { Express } from "express";
import cors from "cors";
import { engine } from "express-handlebars";
import sqlite3 from "sqlite3";

const server: Express = express();
const db = new sqlite3.Database("./database.db");

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.engine("hbs", engine({ extname: ".hbs" }));
server.set("view engine", "hbs");
server.set("views", "./pages");

server.get("/", (req, res) => {
    res.render('index')
});
const PORT = process.env.PORT || 1112;
server.listen(PORT, () => console.log(`server running on port  ${PORT}`));

// git checkout -B template
// git checkout -B 'name'

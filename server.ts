import express, { Express } from "express";
import cors from "cors";
import { engine } from "express-handlebars";

const server: Express = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.engine("hbs", engine({ extname: ".hbs" }));
server.set("view engine", "hbs");
server.set("views", "./pages");

server.get("/", (req, res) => {});
const PORT = process.env.PORT || 1112;
server.listen(PORT, () => console.log(`server running on port  ${PORT}`));

// git checkout -B template
// git checkout -B 'name'

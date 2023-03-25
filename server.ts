import express, { Express } from "express";
import cors from "cors";
import { engine } from "express-handlebars";
import sqlite3 from "sqlite3";

const server: Express = express();
const db = new sqlite3.Database("./post.db");

server.use(express.static("public"));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.engine("hbs", engine({ extname: ".hbs" }));
server.set("view engine", "hbs");
server.set("views", "./pages");

server.get("/", (req, res) => {
  db.all("SELECT * FROM post;", (err, rows) => {
    console.log(err);

    res.render("index", { posts: rows });
  });
});

server.get("/add-post", (req, res) => {
  res.render("add-post");
});

server.post("/new-post", (req, res) => {
  const { nickname, content } = req.body;
  const sql = "INSERT INTO post(nickname, content, date) VALUES (?,?,?);";
  const params = [nickname, content, new Date().toLocaleString()];
  db.run(sql, params, (err) => {
    console.log(err);
    res.redirect("/");
  });
});

server.get("/delete/:id", (req, res) => {
  db.run("DELETE FROM post WHERE id=?", [req.params.id], (err) => {
    console.log(err);
    res.redirect("/");
  });
});
const PORT = process.env.PORT || 1112;
server.listen(PORT, () => console.log(`server running on port  ${PORT}`));

// git checkout -B template
// git checkout -B 'name'

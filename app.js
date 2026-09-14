const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", (req, res) => {
    res.render("index", { posts: posts });
});

app.post("/posts", (req, res) => {
    res.redirect("/");
});

app.get("/posts/:id/edit", (req, res) => {
    res.send("Edit page will go here.");
});

app.post("/posts/:id/edit", (req, res) => {
    res.redirect("/");
});

app.post("/posts/:id/delete", (req, res) => {
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
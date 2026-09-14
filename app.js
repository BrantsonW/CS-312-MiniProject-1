const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];
let nextId = 1;

//HOMEPAGE
app.get("/", (req, res) => {
    res.render("index", { posts: posts });
});

//CREATING NEW BLOG POSTS
app.post("/posts", (req, res) => {
    //form information
    const author = req.body.author;
    const title = req.body.title;
    const content = req.body.content;

    //new post object
    const newPost = {
        id: nextId,
        author: author,
        title: title,
        content: content,
        createdAt: new Date()
    };

    //increment to the next id
    nextId++;

    //add the new post
    posts.push(newPost);

    res.redirect("/");
});

app.get("/posts/:id/edit", (req, res) => {
    const id = Number(req.params.id);

    const post = posts.find(post => post.id === id);

    res.render("edit", { post: post });
});

app.post("/posts/:id/edit", (req, res) => {
    const id = Number(req.params.id);

    const post = posts.find(post => post.id === id);

    post.author = req.body.author;
    post.title = req.body.title;
    post.content = req.body.content;

    res.redirect("/");
});

app.post("/posts/:id/delete", (req, res) => {
    res.redirect("/");
});

app.listen(PORT, () => {});
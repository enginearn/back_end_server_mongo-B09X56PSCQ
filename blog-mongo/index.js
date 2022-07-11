// index.js

const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
const mongoose = require('mongoose')
const config = require('./.config.js')

app.set('view engine', 'ejs')

// Connecting to MongoDB
mongoose.connect(config.mongodb_connect)
        .then(() => {
        console.log('Success: Connected to MongoDB')
        })
        .catch(err => {
        console.error('Failure: Unconnected to MongoDB', err)
        })

const Schema = mongoose.Schema

// Mongo Schema and Model
const blogSchema = new Schema({
    // object name : type,
    title: String,
    summary: String,
    image: String,
    textBody: String,
})

const BlogModel = mongoose.model('Blog', blogSchema)

// BLOG ROUTES

// Create a new blog
app.get("/blog/create", (req, res) => {
    res.sendFile(__dirname + "/views/blogCreate.html");
})

app.post("/blog/create", (req, res) => {
    console.log("POST request received!");
    console.log("req: ", req.body);
    BlogModel.create(req.body, (error, savedBlogData) => {
        if (error) {
            console.error("Error: ", error);
            res.send("データの投稿に失敗しました...");
            return res.sendStatus(500);
        } else {
            console.log("Success: Blog created!");
            res.send("データを投稿しました!");
            res.redirect("/");
        }
    })
    res.send("Saved data!");
})

// Read all blogs
app.get('/', async(req, res) => {
    const test = 'test data';
    console.log(test);
    const allBlogs = await BlogModel.find();
    console.log('allBlogs: ', allBlogs);
    // res.send('Read All bogs!');
    res.render('index', { allBlogs: allBlogs });
})

// Read single blog
app.get("/blog/:id", async(req, res) => {
    console.log(req.params.id);
    const singleBlog = await BlogModel.findById(req.params.id);
    console.log('singleBlog: ', singleBlog);
    // res.send("Read single blog!");
    res.render('blogRead', {singleBlog: singleBlog});
})

// Update blog
app.get("/blog/update/:id", async (req, res) => {
    const singleBlog = await BlogModel.findById(req.params.id);
    console.log('singleBlog: ', singleBlog);
    res.send("Update blog!");
})

app.post("/blog/update/:id", (req, res) => {
    BlogModel.updateOne({ _id: req.params.id }, req.body).exec((error) => {
        if (error) {
            console.error("Error: ", error);
            res.send("データの更新に失敗しました...");
            return res.sendStatus(500);
        } else {
            console.log("Success: Blog updated!");
            res.send("データを更新しました!");
            // res.redirect("/");
        }
    })
})

// Delete blog
app.get("/blog/delete/:id", async (req, res) => {
    const singleBlog = await BlogModel.findById(req.params.id);
    console.log('singleBlog: ', singleBlog);
    res.send("Delete blog!");
})

app.post("/blog/delete/:id", (req, res) => {
    BlogModel.deleteOne({ _id: req.params.id }, (error) => {
        if (error) {
            console.error("Error: ", error);
            res.send("データの削除に失敗しました...");
            return res.sendStatus(500);
        } else {
            console.log("Success: Blog deleted!");
            res.send("データを削除しました!");
            // res.redirect("/");
        }
    })
})

// Connecting to port
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
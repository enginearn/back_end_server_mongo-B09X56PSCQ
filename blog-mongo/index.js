const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
const mongoose = require('mongoose')
const session = require('express-session')
const config = require('./.config.js')

app.set('view engine', 'ejs')
app.use("/public", express.static('public'))

// Session
app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 300000} // 1000 = 1 second = 300000 = 5 minutes
}))

// Connecting to MongoDB
mongoose.connect(config.mongodb_connect)
        .then(() => {
        console.log('Success: Connected to MongoDB')
        })
        .catch((error) => {
        console.error('Failure: Unconnected to MongoDB', error)
        })

// Mongo Schema and Model
const Schema = mongoose.Schema

const blogSchema = new Schema({
    // object name : type,
    title: String,
    summary: String,
    image: String,
    textBody: String,
})

// UserSchema
const userSchema = new Schema({
    // name: String,
    // email: String,
    // password: String,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const BlogModel = mongoose.model('Blog', blogSchema)
const UserModel = mongoose.model('User', userSchema)

// BLOG ROUTES
// Read all blogs
app.get('/', async(req, res) => {
    const test = 'test data';
    console.log(test);
    const allBlogs = await BlogModel.find();
    console.log('allBlogs: ', allBlogs);
    console.log('req: ', req);
    // res.send('Read All bogs!');
    res.render('index', {allBlogs: allBlogs, session: req.session.userId});
})

// Read a single blog
app.get("/blog/:id", async(req, res) => {
    console.log(req.params.id);
    const singleBlog = await BlogModel.findById(req.params.id.trim()); // req.params.id
    console.log('singleBlog: ', singleBlog);
    // res.send("Read single blog!");
    res.render('blogRead', {singleBlog: singleBlog, session: req.session.userId});
})

// Create a new blog
app.get("/blog/create", (req, res) => {
    // res.sendFile(__dirname + "/views/blogCreate.html");
    if (req.session.userId) {
        res.render('blogCreate');
    } else {
        res.redirect('/user/login');
    }
})

app.post("/blog/create", (req, res) => {
    console.log("POST request received!");
    console.log("req: ", req.body);
    BlogModel.create(req.body, (error, savedBlogData) => {
        if (error) {
            console.error("Error: ", error);
            // res.send("データの投稿に失敗しました...");
            res.render("error", {message: "/blog/createのエラー"});
            return res.sendStatus(500);
        } else {
            console.log("Success: Blog created!");
            // res.send("データを投稿しました!");
            // res.send("Saved data!");
            res.redirect("/");
        }
    })
})

// Update blog
app.get("/blog/update/:id", async (req, res) => {
    if (req.session.userId) {
        const singleBlog = await BlogModel.findById(req.params.id.trim()); // req.params.id
        console.log('singleBlog: ', singleBlog);
        // res.send("Update blog!");
        res.render('blogUpdate', {singleBlog});
    } else {
        res.redirect('/user/login');
    }
})

app.post("/blog/update/:id", (req, res) => {
    BlogModel.updateOne({_id: req.params.id}, req.body).exec((error) => { // req.params.id
        if (error) {
            console.log("Error: ", error);
            // res.send("データの更新に失敗しました...");
            res.render("error", {message: "/blog/updateのエラー"});
            return res.sendStatus(500);
        } else {
            console.log("Success: Blog updated!");
            res.redirect("/");
            // res.send("データを更新しました!");
        }
    })
})

// Delete blog
app.get("/blog/delete/:id", async (req, res) => {
    if (req.session.userId) {
        const singleBlog = await BlogModel.findById(req.params.id.trim());
        console.log('singleBlog: ', singleBlog);
        // res.send("Delete blog!");
        res.render('blogDelete', {singleBlog});
    } else {
        res.redirect('/user/login');
    }
})

app.post("/blog/delete/:id", (req, res) => {
    BlogModel.deleteOne({_id: req.params.id}).exec((error) => { // req.params.id
        if (error) {
            console.log("Error: ", error);
            // res.send("データの削除に失敗しました...");
            res.render("error", {message: "/blog/deleteのエラー"});
            return res.sendStatus(500);
        } else {
            console.log("Success: Blog deleted!");
            // res.send("データを削除しました!");
            res.redirect("/");
        }
    })
})

// User function
//Create a new user
app.get("/user/create", (req, res) => {
    res.render("userCreate");
})

app.post("/user/create", (req, res) => {
    UserModel.create(req.body, (error, savedUserData) => {
        if (error) {
            console.error("Error: ", error);
            // res.send("ユーザーデータの書き込みに失敗しました...");
            res.render("error", {message: "/user/createのエラー"});
            return res.sendStatus(500);
        } else {
            console.log("Success: User created!");
            // res.send("ユーザーデータの登録が成功しました!");
            res.redirect("/");
        }
    })
})

// user Login
app.get("/user/login", (req, res) => {
    res.render("login");
})

app.post("/user/login", (req, res) => {
    UserModel.findOne({email: req.body.email}, (error, savedUserData) => {
        if (savedUserData) {
            if (savedUserData.password === req.body.password) {
                req.session.userId = savedUserData._id; // mongoDBeの_idをsessionに保存
                console.log("Success: User logged in!");
                res.redirect("/");
                // res.send("ユーザーデータのログインが成功しました!");
                // return res.sendStatus(200);
            } else {
                console.log("Error: User password is incorrect!");
                // res.send("ユーザーデータのパスワードが間違っています!");
                res.render("error", {message: "/user/loginのエラー"});
                res.redirect("/user/login");
            }
        } else {
                console.error("Error: ", error);
                // res.send("ユーザーデータのログインに失敗しました...");
                res.render("error", {message: "/user/loginのエラー: ユーザーデータが存在しません"});
                res.redirect("/user/create");
                // return res.sendStatus(500);
            }
    })
})

// Connecting to port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
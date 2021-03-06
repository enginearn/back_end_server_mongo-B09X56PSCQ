// index.js

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

// Read single blog
app.get("/blog/:id", async(req, res) => {
    console.log(req.params.id);
    const singleBlog = await BlogModel.findById(req.params.id);
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
            // res.send("???????????????????????????????????????...");
            res.render("error", {message: "/blog/create????????????"});
            return res.sendStatus(500);
        } else {
            console.log("Success: Blog created!");
            // res.send("??????????????????????????????!");
            // res.send("Saved data!");
            res.redirect("/");
        }
    })
})


// Update blog
app.get("/blog/update/:id", async (req, res) => {
    if (req.session.userId) {
        const singleBlog = await BlogModel.findById(req.params.id);
        console.log('singleBlog: ', singleBlog);
        // res.send("Update blog!");
        res.render('blogUpdate', {singleBlog: singleBlog});
    } else {
        res.redirect('/user/login');
    }
})

app.post("/blog/update/:id", (req, res) => {
    BlogModel.updateOne({ _id: req.params.id }, req.body).exec((error) => {
        if (error) {
            console.error("Error: ", error);
            // res.send("???????????????????????????????????????...");
            res.render("error", {message: "/blog/update????????????"});
            return res.sendStatus(500);
        } else {
            console.log("Success: Blog updated!");
            res.redirect("/");
            // res.send("??????????????????????????????!");
        }
    })
})

// Delete blog
app.get("/blog/delete/:id", async (req, res) => {
    if (req.session.userId) {
        const singleBlog = await BlogModel.findById(req.params.id);
        console.log('singleBlog: ', singleBlog);
        // res.send("Delete blog!");
        res.render('blogDelete', {singleBlog: singleBlog});
    } else {
        res.redirect('/user/login');
    }
})

app.post("/blog/delete/:id", (req, res) => {
    BlogModel.deleteOne({ _id: req.params.id }).exec((error) => {
        if (error) {
            console.error("Error: ", error);
            // res.send("???????????????????????????????????????...");
            res.render("error", {message: "/blog/delete????????????"});
            return res.sendStatus(500);
        } else {
            console.log("Success: Blog deleted!");
            // res.send("??????????????????????????????!");
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
            // res.send("?????????????????????????????????????????????????????????...");
            res.render("error", {message: "/user/create????????????"});
            return res.sendStatus(500);
        } else {
            console.log("Success: User created!");
            // res.send("???????????????????????????????????????????????????!");
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
                req.session.userId = savedUserData._id; // mongoDBe???_id???session?????????
                console.log("Success: User logged in!");
                res.redirect("/");
                // res.send("?????????????????????????????????????????????????????????!");
                // return res.sendStatus(200);
            } else {
                console.log("Error: User password is incorrect!");
                // res.send("???????????????????????????????????????????????????????????????!");
                res.render("error", {message: "/user/login????????????"});
                res.redirect("/user/login");
            }
        } else {
                console.error("Error: ", error);
                // res.send("?????????????????????????????????????????????????????????...");
                res.render("error", {message: "/user/login????????????: ??????????????????????????????????????????"});
                res.redirect("/user/create");
                // return res.sendStatus(500);
            }
    })
})

// Connecting to port
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
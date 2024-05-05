const express = require('express');
const path = require('path');
const bcrypt = require("bcrypt")
const collection = require('./config'); // Import the collection from config.js
const { compare } = require('bcrypt');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});




// Register User
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    const existingUser = await collection.findOne({name: data.name});
    if (existingUser){
        res.send("User already exist. Please choose a different username.");
    }else{
        // hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password,saltRounds)

        data.password =hashedPassword;
        
        const userdata = await collection.insertMany(data);
        console.log(userdata);
 
    }
    const userdata = await collection.insertMany(data);
    console.log(userdata);
});

//login user
//login user
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.send("User name not found");
        }

        // Compare the hashed password from the database with the plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            res.redirect(`/home?username=${req.body.username}`); // Redirect to home with username as query parameter
        } else {
            res.send("Wrong password");
        }
    } catch (error) {
        res.send("Wrong details");
    }
});
// In the home page route handler
app.get("/home", (req, res) => {
    const username = req.query.username; // Retrieve the username from the query parameter
    res.render("home", { username: username }); // Pass the username to the home page
});

const port = 8000;
app.listen(port, () => {
    console.log(`server running on port : ${port}`);
});

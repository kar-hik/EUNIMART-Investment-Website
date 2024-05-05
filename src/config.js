const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://0.0.0.0:27017/Login-tut")
connect.then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection error:", err);
});

const LoginSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required:true
    }
});

const collection = new mongoose.model("users",LoginSchema)

module.exports = collection;
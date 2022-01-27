import mongoose from "mongoose";
import postSchema from "../models/blogPost.model.js";
import userSchema from "../models/user.model.js";
import { config } from "dotenv";

config();

// const mongodbUri = 
//    enviroment === "development"
//    ? config.get("authDBUriDev")
//    : config.get("authDBUriPro");

// const options = {
//     useNewUrlParser: true,
//     useUnifiedToplogy: true,
// }

//mongodb connection uri
const mongodbUri = process.env.MONGODB_ATLAS_URI;
   
//connection to mongodb
const connectDB = mongoose.createConnection(mongodbUri, (err) => {
    if(!err) {
        console.log("mongodb connection successfull.")
    } else {
        console.log("Error in connection to mongodb!", err)
    }
});

const Post = connectDB.model("Post", postSchema);
const User = connectDB.model("User", userSchema);

export {
    connectDB,
    Post,
    User
}
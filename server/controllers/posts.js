import mongoose from "mongoose";
import { Post } from "../config/db.js";

//api get route
const getPosts = (req, res) => {
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(404).json("Error in geting posts!", err));
}

//api post methode
const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    try {
        await newPost.save()
    } catch (error) {
        console.log(error)
    }
}

//api patch methode
const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    console.log(_id)
    const post = req.body;

    if(mongoose.Types.ObjectId.isValid(_id)){
        const updatePost = await Post.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
        res.status(200).json(updatePost);
    } else {
        res.status(404).send("no post found with that id");
    }
}

//api delete methode
const deletePost = async (req, res) => {
    const { id } = req.params;

    if(mongoose.Types.ObjectId.isValid(id)) {
        const deletePost = await Post.findByIdAndDelete(id)
    } else {
        console.log("No object with that id");
    }
}

export {
    getPosts,
    createPost,
    updatePost,
    deletePost
}
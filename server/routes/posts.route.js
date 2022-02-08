import express from "express";
//Posts controller
import { getPosts, createPost, updatePost, deletePost } from "../controllers/posts.js";

const router = express.Router();

//Api post routes
router.get("/", getPosts)
      .post("/", createPost)
      .patch("/:id", updatePost)
      .delete("/:id", deletePost);

export default router;
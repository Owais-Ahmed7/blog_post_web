import express from "express";
import { getRoute, postRoute, updateRoute, deleteRoute } from "../controllers/posts.js";

const router = express.Router();

//Api routes
router.get("/", getRoute)
      .post("/", postRoute)
      .put("/", updateRoute)
      .delete("/", deleteRoute);


export default router;
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import apiRoutes from "./routes/posts.route.js";

const app = express();

const port = process.env.PORT || 5000;

//express middlewares
app.use(express.urlencoded({extended: true, limit: "30mb"}));
app.use(express.json({extended: true, limit: "30mb"}));
app.use(cors());

//mongodb connection
connectDB;

//application routes
app.use("/posts", apiRoutes);


//port listening
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})
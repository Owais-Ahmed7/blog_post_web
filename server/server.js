import express from "express";

const app = express();

const port = process.env.PORT || 5000;

//express middlewares
app.use(express.urlencoded({extended: true, limit: "30mb"}));
app.use(express.json({extended: true, limit: "30mb"}));
app.use(cors());

//application routes
app.use(ApiRoutes);


//port listening
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})
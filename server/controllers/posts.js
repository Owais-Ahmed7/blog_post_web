import { response } from "express";
import { Post } from "../config/db.js";

//api get route
const getRoute = (req, res) => {
    Post.find()
        .then(response => res.status(200).json(response))
        .catch(err => res.status(404).json("Error in geting posts!", err));
}

//api post methode
const postRoute = (req, res) => {

}

//api put methode
const updateRoute = (req, res) => {

}

//api delete methode
const deleteRoute = () => {

}

export {
    getRoute,
    postRoute,
    updateRoute,
    deleteRoute
}
import axios from "axios";

const url = "http://localhost5000/posts/";

//fetch posts from db
export const fetchPosts = () => axios.get(url);

export const createPosts = () => axios.post(url, )
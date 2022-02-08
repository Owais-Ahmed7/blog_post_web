import axios from "axios";

const url = "http://localhost:5000";

//fetch posts from db
export const fetchPosts = () => axios.get(`${url}/posts/`);

//create post
export const createPost = (newPost) => axios.post(`${url}/posts/`, newPost);

//patch post
export const updatePost = (id, updatedPost) => axios.patch(`${url}/posts/${id}`, updatedPost);

//delete post
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);

//user signup
export const signUp = (userData) => axios.post(`${url}/auth/signup`, userData);

//user signin
export const signIn = (userData) => axios.post(`${url}/auth/signin`, userData);
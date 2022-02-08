import * as api from "../../api/index";

//action creators
//redux thunk for async actions and the syntax changes alittle bid
//fetch posts
// export const fetchPosts = () => {
//     try {
//         const { data } = api.fetchPosts();
//         console.log("data post action", data);  
//         const action = { type: 'FETCH_ALL', payload: data } 
//         return action;
//     } catch (error) {
//         console.log(error.message);
//     }
//     // const action = { type: 'FETCH ALL', payload: [] }
// }
export const fetchPosts = () => async (dispatch) => {
    const { data } = await api.fetchPosts();
    const action = { type: 'FETCH_ALL', payload: data }
    dispatch(action);
};

//create post
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        const action = { type: 'CREATE_POST', payload: data }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

//update post
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        const action = { type: 'UPDATE_POST', payload: data };
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};

//delete post 
export const deletePost = (id) => async (dispatch) => {
    try {
        console.log("delete post action id", id)
        await api.deletePost(id);
        const action = { type: 'DELETE_POST', payload: id }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

// this is for sync function
// export const getPosts = () => {
//     try {
//         // const { data } = api.fetchPosts();  
//         const action = { type: 'FETCH_ALL', payload: [] } 
//         return action;
//     } catch (error) {
//         console.log(error.message);
//     }
//     // const action = { type: 'FETCH ALL', payload: [] }
// }

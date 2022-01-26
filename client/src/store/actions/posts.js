import * as api from "../../api/index";

//action creators
//redux thunk for async actions and the syntax changes alittle bid
// const getPosts = () => async (dispatch) => {
//     const action = { type: 'FETCH ALL', payload: [] }

//     dispatch(action);
// }

export const getPosts = () => {
    try {
        // const { data } = api.fetchPosts();  
        const action = { type: 'FETCH_ALL', payload: [] } 
        return action;
    } catch (error) {
        console.log(error.message);
    }
    // const action = { type: 'FETCH ALL', payload: [] }
}
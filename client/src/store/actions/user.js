import * as api from "../../api/index.js";

export const userSignUp = (userData) => async (dispatch) => {
    const { data } = await api.signUp(userData);
    const action = { type: 'SIGN-UP', payload: data }
    dispatch(action);
}

export const userSignIn = (userData) => async (dispatch) => {
    const { data } = await api.signIn(userData);
    const action = { type: 'SIGN-IN', payload: data }
    dispatch(action);
}
import * as api from "../../api/index.js";

export const userSignUp = () => async (dispatch) => {
    const { data } = await api.signUp();
    const action = { type: 'SIGN-UP', payload: data }
    dispatch(action);
}

export const userSignIn = () => async (dispatch) => {
    const { data } = await api.signIn();
    const action = { type: 'SIGN-IN', payload: data }
    dispatch(action);
}
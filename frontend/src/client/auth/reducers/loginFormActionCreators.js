import AuthService from "../services/auth.service";
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from "./loginFormActionTypes";

const authServ = new AuthService();

export const signInRequest = () => {
    return { type: SIGN_IN_REQUEST };
}

export const signInSuccess = () => {
    return { type: SIGN_IN_SUCCESS };
}

export const signInFailed = (payload) => {
    return { type: SIGN_IN_FAILED, payload };
}

export const signInRequestCreator = ({ email, password }) => {
    return async ( dispatch ) => {
        dispatch(signInRequest());

        try {
            await authServ.signIn({ email, password })
            dispatch(signInSuccess())
        } catch (err) {
            // TODO: Delete console.log
            console.log(err);
            dispatch(signInFailed(err))
        }
    }
}

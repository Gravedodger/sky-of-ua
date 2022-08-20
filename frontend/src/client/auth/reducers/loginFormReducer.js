import AuthService from "../services/auth.service";
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from "./loginFormActionTypes";

const { accessToken } = new AuthService().loadToken();

const initialState = {
    "is_authenticated": Boolean(accessToken),
    "loading": false,
    "messages": [],
    "errors": null
}

const loginFormReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SIGN_IN_REQUEST:
            return { ...state, loading: true, errors: null, messages: [] }
        case SIGN_IN_SUCCESS:
            return { ...state, is_authenticated: true, loading: false }
        case SIGN_IN_FAILED:
            const { errors, messages } = payload;
            return { ...state, is_authenticated: false, loading: false, errors, messages }
        default:
            return state;
    }
}

export default loginFormReducer;

import {USER_SIGNUP_START,USER_SIGNUP_SUCCESS,USER_SIGNUP_ERROR} from '../constaints';

export const start_signup = ()=>{
    return {
        type:USER_SIGNUP_START
    }
}

export const signup_success = (data)=>{
    return {
        type:USER_SIGNUP_SUCCESS,
        data
    }
}

export const signup_error = (data)=>{
    return {
        type:USER_SIGNUP_ERROR,
        data
    }
}
import {USER_SIGNUP_START,USER_SIGNUP_SUCCESS,USER_SIGNUP_ERROR} from '../constaints';


const initSignup = {
    loading:false,
    error:false,
    data:''
}

export const add_signup = (state=initSignup,action)=>{

    switch(action.type){
        case USER_SIGNUP_START:
            return {
                loading:true,
                error:false,
                data:''
            }

            case USER_SIGNUP_SUCCESS:
            return {
                loading:false,
                error:false,
                data:action.data
            }

            case USER_SIGNUP_ERROR:
            return {
                loading:false,
                error:true,
                data:action.data
            }

            default: 
               return state
    }
}
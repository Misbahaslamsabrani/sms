import Type from "../const/types"
const initState = {
    LogInUser: {},
    errorMessage: "",
    email: false,
    pass: false
}

const SignInReducer = (state = initState, action) => {
    if (action.type === Type.logInS) {
        return state = {
            ...state,
            LogInUser: action.logInUser,
            email: false,
            pass: false,
            errorMessage: false,
        }
    }
    else if (action.type === Type.remove) {
        return state = {
            ...state,
            errorMessage: "",
            email: false,
            pass: false
        }
    }
    else if (action.type === Type.logInE) {
        if (action.logInError.code === "auth/invalid-email") {
            return state = {
                ...state,
                errorMessage: action.logInError.message,
                email: true
            }
        }
        else if (action.logInError.code === "auth/wrong-password") {
            return state = {
                ...state,
                errorMessage: "The password is invalid",
                pass: true
            }
        }
        else if (action.logInError.code === "auth/user-not-found") {
            return state = {
                ...state,
                errorMessage: `We can't find an account with ${action.userEmail}. Try another email, or if you don't have an account, you can Sign up.`,
                email: true
            }
        }
        else if (action.logInError.code === "auth/user-disabled") {
            return state = {
                ...state,
                errorMessage: `Sorry, This user account has been disabled by an administrator.`,
                email: true
            }
        }
        else {
            return state
        }
    }
    else if(action.type === Type.logInVE){
        return state = {
            ...state,
            errorMessage: "Please enter your email address",
            email: true
        }
    }
    else if(action.type === Type.logInVP){
        return state = {
            ...state,
            errorMessage: "Please enter your password",
            pass: true
        } 
    }
    else {
        return state
    }
}

export default SignInReducer;
import Type from "../const/types"
const initState = {
    SignUpUser: {},
    errorMessage: "",
    email: false,
    pass: false
}

const SignUpReducer = (state = initState, action) => {
    if (action.type === Type.SignUpS) {
        return state = {
            ...state,
            SignUpUser: action.signUpUser,
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
    else if (action.type === Type.signUpE) {
        if(action.signUpError.code === "auth/invalid-email"){
            return state = {...state,
            errorMessage: "Please enter a valid email address.", email: true}
        }
        else if(action.signUpError.code === "auth/weak-password"){
            return state = {...state,
            errorMessage:"Password should be at least 6 characters long.", pass: true}
            }
        if(action.signUpError.code === "auth/email-already-in-use"){
            return state = {...state,
            errorMessage: action.signUpError.message, email: true}
            }
        else {
            return state
        }
    }
    else if(action.type === Type.SignUpVE){
        return state = {
            ...state,
            errorMessage: "Please enter your valid email address.",
            email: true
        }
    }
    else if(action.type === Type.SignUpVP){
        return state = {
            ...state,
            errorMessage: "Please enter your 6 digit password.",
            pass: true
        } 
    }
    else {
        return state
    }
}

export default SignUpReducer;
import {combineReducers} from "redux"
import UserDataReducer from "./UserDataReducer"
import authReducer from "./authReducer"
import SignInReducer from "./SignInReducer";
import SignUpReducer from "./SignUpReducer";
const rootReducer = combineReducers({
UserData: UserDataReducer,
auth: authReducer,
signIn: SignInReducer,
signUp: SignUpReducer,
})

export default rootReducer;
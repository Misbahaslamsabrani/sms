import {combineReducers} from "redux"
import UserDataReducer from "./UserDataReducer"
import authReducer from "./authReducer"
const rootReducer = combineReducers({
UserData: UserDataReducer,
auth: authReducer
})

export default rootReducer;
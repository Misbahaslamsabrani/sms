import Type from "../const/types"
const initState={
    currentUser: null,
}
const authReducer = (state = initState, action) => {
    switch(action.type){
        case Type.currentUser:
        return state={
            ...state,
            currentUser: action.currentUser
        }
        case Type.currentUserError:
        return state = {
            ...state,
            currentUser: null,
        }
        case Type.logOut:
        return state;
        default:
        return state;
    }
}
export default  authReducer;
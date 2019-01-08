const initState = {
    allStudents: [],
    editID: null,
    editFlag: false,
}
const UserDataReducer = (state = initState, action) => {
    switch(action.type){
        case "pervData": 
        return state = {
            ...state,
            allStudents: action.allpervdata
        }
        case "Add": 
        return state;
        case "Edit":
        return state;
        case "Del":
        return state;
        case "EditID":
        return state = {
            ...state,
            editID: action.editId,
            editFlag: true
        }
        case "RemoveEditID":
        return state = {
            ...state,
            editID: null,
            editFlag: false
        }
        default:
        return state;
    }
}
export default UserDataReducer;
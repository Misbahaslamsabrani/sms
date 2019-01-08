import "../../config/firebase"
import * as firebase from "firebase"
var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
export const PervData = () => {
    return (dispatch) => {
        db.collection("Students").onSnapshot(doc => {
            const TemArr = []
            for(let key in doc.docs){
                TemArr.push({id: doc.docs[key].id, 
                    name: doc.docs[key].data().name,
                    age: doc.docs[key].data().age,
                    gender: doc.docs[key].data().gender,
                    batch: doc.docs[key].data().batch,
                })
            }
            dispatch({type: "pervData", allpervdata: TemArr})
        })
    }
}
export const AddStudent = (additem) => {
    return (dispatch) => { 
        db.collection("Students").add(additem)
        .then(function(docRef) {
            dispatch({type: "Add"})
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}

export const EditStudent = (editItem, eIndex) => {
    return (dispatch) => {
    db.collection('Students').doc(eIndex).update(editItem)
    dispatch({type:"Edit"})
    }
}
export const DeleteStudent = (did) => {
    return (dispatch) => {
    db.collection("Students").doc(did).delete()
    dispatch({type:"Del"})
    }
}
export const ForEditID = (eid) => {
    return {type: "EditID", editId: eid}
}
export const RemoveEditID = () => {
    return {type: "RemoveEditID"}
}

import React, { Component } from 'react';
import {View, StyleSheet,Text, TextInput, Button} from "react-native"
import { AddStudent, EditStudent, RemoveEditID} from '../store/Actions/UserDataActions';
import {connect} from "react-redux";
class SubmitForm extends Component {
    constructor() {
        super();
        this.state = {
            Name:  "",
            Age: "",
            Batch: '',
            Gender: "",
            edit: null,
            editIndex: "",
          };
    }
    componentWillReceiveProps = (nextProps) => {   
        if(nextProps.editFlag){
            const id = nextProps.eeid;
            const s = nextProps.allStudents.find(value => 
                value.id === id)
            
            this.setState({Name: s.name, Age: s.age, Batch: s.batch, Gender: s.gender,
            edit: true, editIndex: id})
        }
        else{
            this.setState({Name: "", Age: "", Batch: "", Gender: "",
                edit: null, editIndex: ""})
        }
    } 
    
    onAdd = () => {
        const {Name , Age, Batch, Gender, edit, editIndex} = this.state;
        if(Name === '' || Age === "" || Batch === "" || Gender === ""){
            return
        }
        else if(editIndex !== ""){
            this.props.EditStu({name: Name, age: Age, batch: Batch, gender: Gender}, editIndex);
        }
        else{
            this.props.AddStu({name: Name, age: Age, batch: Batch, gender: Gender});
        }
        this.setState({Name: "" ,
        Age: "", Batch: "", Gender: "", 
        edit: null, editIndex: ""})
        
        this.props.navigation.navigate("Display Data")
        this.props.removeeeid();
    }
    render() {
        return (
            <View>
                <View style={{backgroundColor: "#26a69a", display: "flex",marginTop: 5, alignItems: "center"}}><Text style={{fontSize: 15, fontWeight: "bold", color: "white"}}>Submit Form</Text></View>
                <View style={styles.inputMainContainer}>
                 <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Name"
                        onChangeText={(value) => this.setState({Name: value})}
                        value={this.state.Name}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Age"
                        onChangeText={(value) => this.setState({Age: value})}
                        value={this.state.Age}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Batch"
                        onChangeText={(value) => this.setState({Batch: value})}
                        value={this.state.Batch}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Gender"
                    onChangeText={(value) => this.setState({Gender: value})}
                    value={this.state.Gender}
                    />                
                </View>
            </View>
                <View style = {styles.buttonMainContainer}>
                <View style={styles.buttonContainer}>
                    {this.state.edit ? (
                        <Button title="Update" color="#00695c" onPress={this.onAdd}/>
                    ) : (
                        <Button title="Submit" color="#00695c" onPress={this.onAdd}/>)}
                </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    inputContainer: {
        borderBottomWidth: 1,
        width: 200,
        borderColor: "#00695c"
    },
    inputMainContainer: {
        display: "flex",
        alignItems: "center",
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 15,
        width: 100,
    },
    buttonMainContainer: { 
        height: 60,
        display: "flex",
        alignItems: 'center',
        justifyContent: "center"
    },
    radioButtonContainer: {
        color: "green",
        width: 200,
        height: 100,
        display: "flex",
        alignContent: "space-around",
        justifyContent: "center"
    }

});
mapDispatchToProps = (dispatch) => {
    return {
        AddStu: (addstu) => dispatch(AddStudent(addstu)),
        EditStu: (editstu, edid) => dispatch(EditStudent(editstu, edid)),
        removeeeid: () => dispatch(RemoveEditID()),
    }
}
mapStateToProps = (state) => {
    return{
        allStudents: state.UserData.allStudents,
        editFlag: state.UserData.editFlag,
        eeid: state.UserData.editID
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);
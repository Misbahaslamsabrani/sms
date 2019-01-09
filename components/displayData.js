import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import {DeleteStudent, ForEditID, PervData, RemoveEditID} from '../store/Actions/UserDataActions';
class DisplayData extends Component {
    editItem = (id) => {
        this.props.navigation.navigate("Submit Form")
        this.props.editId(id)
    }
    delItem = (id) => {
        this.props.delStu(id);
        this.props.removeeeid();
        
    }
    componentDidMount(){
        this.props.pervData();
    }
    render(){
                return (
            <ScrollView>
                <View style={styles.mainMainContainer}>
                    {this.props.allStudents.length > 0 ? (
                        <View>
                            <View style={{backgroundColor: '#26a69a', display: "flex",marginTop: 5, alignItems: "center"}}><Text style={{fontSize: 15, fontWeight: "bold", color: "white"}}>Student Data</Text></View>
                            {this.props.allStudents.map((v, i) => {
                            return (<View key={i} style={styles.mainContainer}>
                                <View style={styles.number}>
                                    <Text style={{ fontSize: 17, color: "black" }}>{i + 1}.</Text></View>
                                <View style={styles.mainItem}>
                                    <Text style={{ fontSize: 17, color: "black" }}>{v.name}</Text></View>
                                <View style={styles.DetailBu}>
                                    <Icon
                                    raised
                                    name={"id-badge"}
                                    size = {25}
                                    color='#26a69a'
                                    onPress={() => { this.props.navigation.navigate("Details", { id: v.id}) }} />
                                </View>
                                <View style={styles.editBu}>
                                    <Icon raised
                                        name={"edit"}
                                        size={25}
                                        color='#26a69a' 
                                        onPress={() => this.editItem(v.id)} />
                                </View>
                                <View style={styles.delBu}>
                                    <Icon 
                                    raised
                                    name={"trash"}
                                    size = {25}
                                    color='#26a69a'
                                    onPress={() => this.delItem(v.id)} />
                                </View>
                            </View>)
                        })}
                        </View>
    
                    ) : (<View style={{display: "flex", alignItems: "center", width: 400}}>
                    <Text>No, Student Data.</Text></View>)}
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    mainMainContainer: {
        height: 1000,
        backgroundColor: "#a7ffeb",
    },
    mainContainer: {
        marginLeft: 10,
        marginRight: 5,
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
    },
    number: { width: 25,},
    mainItem: { width: 200,},
    DetailBu: {width: 37 },
    editBu: {width: 37},
    delBu: { width: 37 },
})
mapStateToProps = (state) => {
    console.log(state)
    return {
        allStudents: state.UserData.allStudents,
    }
}
mapDispatchToProps = (dispatch) => {
    return{
        pervData: () => dispatch(PervData()),
        delStu: (did) => dispatch(DeleteStudent(did)),
        editId: (eid) => dispatch(ForEditID(eid)),
        removeeeid: () => dispatch(RemoveEditID()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);
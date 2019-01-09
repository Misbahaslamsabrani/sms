import React from 'react';
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"
import Icon from 'react-native-vector-icons/FontAwesome';
const Details = (props) => {
    const data = props.SpecificStudent;
    return (
        props.SpecificStudent ? (<View style={styles.MainContainer}>
            <View style={{marginLeft: 5, marginTop: 5}}>
                <Icon
                    raised
                    name={"backward"}
                    size={25}
                    color='#00bfa5'
                    onPress={() => props.navigation.goBack()} />
            </View>
            <View style={styles.MainDataContainer}>
                <View style={styles.DataBlocks}>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"black"}}>Name: </Text></View>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"#009688"}}>{data.name}</Text></View>
                </View>
                <View style={styles.DataBlocks}>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"black"}}>Age: </Text></View>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"#009688"}}>{data.age}</Text></View>
                </View>
                <View style={styles.DataBlocks}>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"black"}}>Gender: </Text></View>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"#009688"}}>{data.gender}</Text></View>
                </View>
                <View style={styles.DataBlocks}>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"black"}}>Batch: </Text></View>
                <View style={{width: 150}}><Text style={{fontSize: 20, color:"#009688"}}>{data.batch}</Text></View>
                </View>
            </View>
        </View>) : (
                <View><Text style={{ fontSize: 50, color: "green" }}>Loading</Text></View>
            )
    );
}
const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#a7ffeb",
        height: 650,
    },
    MainDataContainer: {
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    DataBlocks: {
        display: "flex",
        flexDirection: "row",
        width: 300,
    }
})
mapStateToProps = (state, getProps) => {
    const id = getProps.navigation.state.params.id;
    const ss = state.UserData.allStudents.find(value => 
        value.id === id)
    return {
        SpecificStudent: ss,
    }
}
export default connect(mapStateToProps)(Details);
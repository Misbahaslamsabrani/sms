import React from 'react';
import { View, Text, Button,StyleSheet } from "react-native";
import { Card } from 'react-native-elements'
import { connect } from "react-redux"
import { LOGOUT } from "../store/Actions/authActions"
const SignOut = (props) => {
    console.log(props)
    return (
        <View style={styles.MainContainer}>
            <Card containerStyle={{ backgroundColor: "#f9fbe7" }}
                title="Sign Out" dividerStyle={{ backgroundColor: "#4db6ac" }}>
                <View><Text>Are you sure, you want to Sign out?</Text></View>
                <View style={styles.makeThemInRow}>
                    <View style={{width: 100, borderWidth: 5, borderColor:"#f9fbe7"}}>
                        <Button color="#26a69a" title="Sign out" onPress={() => {props.logOut()}} />
                    </View>
                    <View style={{width: 100, borderWidth: 5, borderColor:"#f9fbe7"}}>
                        <Button color="#26a69a" title="Cancel" onPress={() => {props.navigation.navigate("Submit Form")}} />
                    </View>
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    makeThemInRow: {
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "center"
    },
    MainContainer: {
        height: 400,
        display: "flex",
        justifyContent: "center"
    }
})
const mapDispatchToProps = (dispatch) => {
    return{
        logOut: () => dispatch(LOGOUT())
    }
}
const mapStateToProps = (state) => {
    return{
        User:state.auth.currentUser
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignOut);
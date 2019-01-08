import React, { Component } from 'react';
import Type from "../store/const/types"
import {View, TextInput, Button, Text, StyleSheet, ScrollView} from "react-native"
import {Card} from 'react-native-elements'
import { connect } from "react-redux"
import { LOGIN, error, SIGNUP } from '../store/Actions/authActions';
import Icon from 'react-native-vector-icons/FontAwesome';
class Auth extends Component{
    constructor(){
        super();
        this.state = {
            signIn: true,
            signUp: false,
            email: "",
            pass: "",
        }
    }
    whenSubmit = () => {
        const {email, pass, signIn, signUp} = this.state;
        if(signIn){
            if(email === ""){
                this.props.LoginVE()
                return
            }
            else if(pass === ""){
                this.props.LoginVP()
                return
            }
            this.props.logIn(email, pass);
        }
        else if(signUp){
            if(email === ""){
                this.props.SignUpVE()
                return
            }
            else if(pass === ""){
                this.props.SignUpVP()
                return
            }
            this.props.signUp(email, pass)
        }
    }

    whenChange1 = () => {
        this.setState({signIn: false, signUp: true})
    }
    whenChange2 = () => {
        this.setState({signUp: false, signIn: true})
    }
    render(){

        return(
            <View style={styles.MainContainer}>
                    {this.state.signIn ? (
                        <Card containerStyle={{backgroundColor: "#f9fbe7"}} 
                        title="Sign In" dividerStyle={{backgroundColor: "#4db6ac"}}>
                        <View>
                            <TextInput underlineColorAndroid="#b9f6ca"
                            onChangeText={value => {this.setState({email:value})
                            this.props.error()}} 
                            placeholder="Email" 
                            value={this.state.email} />
                        </View>
                        {this.props.lemail ? (<View><Text style={{color: "red"}}>{this.props.lmess}</Text></View>) : (null)}
                        <View>
                            <TextInput underlineColorAndroid="#b9f6ca"
                            onChangeText={value => {this.setState({pass:value})
                            this.props.error()}} 
                            placeholder="Password" secureTextEntry={true} 
                            value={this.state.pass} />
                        </View>
                        {this.props.lpass ? (<View><Text style={{color: "red"}}>{this.props.lmess}</Text></View>) : (null)}
                        <View>
                            <Button color="#26a69a" title="Sign In" onPress={this.whenSubmit}/>
                        </View>
                        <View style={styles.makeThemInRow}>
                            <Text>Don't Have An Account?</Text>
                            <View style={styles.smallBuContainer}>
                            <Icon name="arrow-right" size={17} color="#80cbc4"  onPress={this.whenChange1}/></View>
                        </View>
                    </Card>
                    ) : (null)}
                    {this.state.signUp ? (
                        <Card containerStyle={{backgroundColor: "#f9fbe7"}} title="Sign Up" dividerStyle={{backgroundColor: "#4db6ac"}}>
                        <View>
                            <TextInput underlineColorAndroid="#b9f6ca" 
                            onChangeText={value => {this.setState({email:value})
                            this.props.error()}} 
                            placeholder="Email" 
                            value={this.state.email} />
                        </View>
                        {this.props.semail ? (<View><Text style={{color: "red"}}>{this.props.smess}</Text></View>) : (null)}
                        <View>
                            <TextInput underlineColorAndroid="#b9f6ca"
                            placeholder="Password" 
                            secureTextEntry={true} 
                            value={this.state.pass}
                            onChangeText={value => {this.setState({pass: value})
                            this.props.error()}} />
                        </View>
                        {this.props.spass ? (<View><Text style={{color: "red"}}>{this.props.smess}</Text></View>) : (null)}
                        <View><Button color="#26a69a" title="Sign Up" onPress={this.whenSubmit}/></View>
                        <View style={styles.makeThemInRow}>
                            <Text>Already Have An Account?</Text>
                            <View style={styles.smallBuContainer}>
                            <Icon name="arrow-right" size={17}color="#80cbc4" onPress={this.whenChange2}/></View>
                        </View>
                    </Card>
                    ) : (null)}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    smallBuContainer: {
        width: 30,
        marginLeft:10,
    },
    makeThemInRow: {
        display: "flex",
        flexDirection: "row",
        marginTop: 25,
    },
    MainContainer: {
        height: 400,
        display: "flex",
        justifyContent: "center"
    }
  });


  const mapdispatchToProps = (dispatch) => {

    return {
        logIn: (email, pass) => dispatch(LOGIN(email, pass)),
        error: () => dispatch(error()),
        signUp: (email, pass,) => dispatch(SIGNUP(email, pass)),

        LoginVE: () => dispatch({type: Type.logInVE}),
        LoginVP: () => dispatch({type: Type.logInVP}),
        SignUpVE: () => dispatch({type: Type.SignUpVE}),
        SignUpVP: () => dispatch({type: Type.SignUpVP}),
        
    }
}
const mapStateToProps = (state) => {

    return {
        lemail: state.signIn.email,
        lpass: state.signIn.pass,
        lmess: state.signIn.errorMessage,

        semail: state.signUp.email,
        spass: state.signUp.pass,
        smess: state.signUp.errorMessage,

        signUpUser: state.signUp.signUpUser
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Auth);
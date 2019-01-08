import React, { Component } from 'react';
import {View, TextInput, Button, Text, StyleSheet, ScrollView} from "react-native"
import {Card} from 'react-native-elements'
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
    SignUp = () => {
        const {email, pass} = this.state;
        if(email === ""){
            return
        }
        else if(pass === ""){
            return
        }
        this.setState({email: "", pass: ""})
    }
    SignIn = () => {
        const {email, pass} = this.state;
        if(email === ""){
            return
        }
        else if(pass === ""){
            return
        }
        this.setState({email: "", pass: ""})
    }
    whenChange1 = () => {
        this.setState({signIn: false, signUp: true})
    }
    whenChange2 = () => {
        this.setState({signUp: false, signIn: true})
    }
    render(){
        console.log(this.state)
        return(
            <View style={styles.MainContainer}>
                    {this.state.signIn ? (
                        <Card containerStyle={{backgroundColor: "#f9fbe7"}} 
                        title="Sign In" dividerStyle={{backgroundColor: "#4db6ac"}}>
                        <View><Text style={{color: "red"}}>Please fill form properly.</Text></View>
                        <View>
                            <TextInput underlineColorAndroid="#b9f6ca"
                            onChangeText={value => this.setState({email:value})} 
                            placeholder="Email" 
                            value={this.state.email} />
                        </View>
                        <View><Text style={{color: "red"}}>Error</Text></View>
                        <View>
                            <TextInput underlineColorAndroid="#b9f6ca"
                            onChangeText={value => this.setState({pass:value})} 
                            placeholder="Password" secureTextEntry={true} 
                            value={this.state.pass} />
                        </View>
                        <View><Text style={{color: "red"}}>Error</Text></View>
                        <View>
                            <Button color="#26a69a" title="Sign In" onPress={this.SignIn}/>
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
                        <View><Text style={{color: "red"}}>Please fill form properly.</Text></View>
                        <View>
                            <TextInput underlineColorAndroid="#b9f6ca" 
                            onChangeText={value => this.setState({email:value})} 
                            placeholder="Email" 
                            value={this.state.email} />
                        </View>
                        <View><Text style={{color: "red"}}>Error</Text></View>
                        <View>
                            <TextInput underlineColorAndroid="#b9f6ca"
                            placeholder="Password" 
                            secureTextEntry={true} 
                            value={this.state.pass}
                            onChangeText={value => this.setState({pass: value})} />
                        </View>
                        <View><Text style={{color: "red"}}>Error</Text></View>
                        <View><Button color="#26a69a" title="Sign Up" onPress={this.SignUp}/></View>
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
export default Auth;
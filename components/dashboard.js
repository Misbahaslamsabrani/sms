import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import Sms from '../UIComponent.js/SMS';
import{createBottomTabNavigator, createAppContainer } from 'react-navigation'
import SubmitForm from "./SubmitForm";
import DisplayData from "./displayData";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Details from "./details"
import { createStackNavigator} from "react-navigation"
import Auth from './auth';
import { connect } from "react-redux"
import { CURRENTUSER } from '../store/Actions/authActions';
import SignOut from "./signout";

const DisplayStack = createStackNavigator({
    "Display Data": DisplayData,
    "Details": Details
},{headerMode: "none"}
)
const AppRoutes = createBottomTabNavigator({
  "Submit Form":SubmitForm,
  "Display Data":DisplayStack,
  "Sign Out": SignOut,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Submit Form') {
        iconName = `address-card`;
      } else if (routeName === 'Display Data') {
        iconName = `users`;
      } else if (routeName === "Sign Out") {
          iconName = "info-circle"
      }
      return <FontAwesome name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#26a69a',
    inactiveTintColor: 'gray',
  },
})

const AppContainer = createAppContainer(AppRoutes)

class DashBoard extends Component {
    componentDidMount(){
        this.props.currentUser()
      }
    render(){
        return (
            <View>
                <View style={styles.container}>
                <Sms />
                {this.props.User ? (<AppContainer />) : (<Auth />)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a7ffeb',
        height: 660,
    },
});


const mapStateToProps = (state) => {
    const user = state.auth.currentUser ? state.auth.currentUser : null
    return {
        User: user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentUser: () => dispatch(CURRENTUSER()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
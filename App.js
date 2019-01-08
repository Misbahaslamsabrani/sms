import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import DashBoard from './components/dashboard';
import {Provider} from "react-redux"
import store  from "./store/store"
import{createBottomTabNavigator, createAppContainer } from 'react-navigation'
import SubmitForm from "./components/SubmitForm";
import DisplayData from "./components/displayData";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Details from "./components/details"
import { createStackNavigator} from "react-navigation"
import Auth from './components/auth';
const DisplayStack = createStackNavigator({
    "Display Data": DisplayData,
    "Details": Details
},{headerMode: "none"}
)
const AppRoutes = createBottomTabNavigator({
  "Submit Form":SubmitForm,
  "Display Data":DisplayStack,
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
 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <DashBoard />
        {/* <AppContainer /> */}
        <Auth />
      </View>
      </Provider>
    );
  }
}
export default App;
const styles = StyleSheet.create({
    container: {
    backgroundColor: '#a7ffeb',
      height: 660,
    },
  });
  
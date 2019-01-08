import React, { Component } from 'react';
import {View} from "react-native";
import Sms from '../UIComponent.js/SMS';
class DashBoard extends Component {
    render() {
        return (
            <View>
                <Sms />
            </View>
        );
    }
}

export default DashBoard;
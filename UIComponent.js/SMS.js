import React from 'react';
import { View,StyleSheet,Text } from "react-native"
const Sms = () => {
    return (
        <View>
            <View style={styles.sms}>
                <Text style={styles.smsMainHeading}>
                    Student Management System
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    smsMainHeading: {
      color: "white",
      width: 280,
      fontSize: 20,
      fontWeight: "bold"
    },
    sms: {
      borderBottomWidth: 1,
      borderBottomColor: "#004d40",
      display: "flex",
      alignItems: 'center',
      justifyContent: "center",
      height: 50,
      backgroundColor: "#004d40"
    }
  });
export default Sms;
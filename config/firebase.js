const firebase = require("firebase");
  require("firebase/firestore");
  
var config = {
    apiKey: "AIzaSyDUlzZxTDbd-uLck5DGqU8hUj-OgbpX914",
    authDomain: "sms-react-native-app.firebaseapp.com",
    databaseURL: "https://sms-react-native-app.firebaseio.com",
    projectId: "sms-react-native-app",
    storageBucket: "",
    messagingSenderId: "901088618893"
  };
  firebase.initializeApp(config);
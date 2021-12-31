// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsWdhm6xbRzcJHrT7uqyohl2q65m5kC7U",
    authDomain: "covid-fb0dc.firebaseapp.com",
    databaseURL: "https://covid-fb0dc-default-rtdb.firebaseio.com",
    projectId: "covid-fb0dc",
    storageBucket: "covid-fb0dc.appspot.com",
    messagingSenderId: "253039653599",
    appId: "1:253039653599:web:5cb179ed7f7c643d9baf6a",
    measurementId: "G-D1XQBFBHKG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
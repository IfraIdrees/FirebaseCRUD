// database/firebaseDb.js

// import * as firebase from 'firebase';
// import {firebase} from "@react-native-firebase/app";

// import firestore from  "@react-native-firebase/firestore";
import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvdyF57GugamfJ1aJW12dY4-BxjOiZA5o",
    authDomain: "reactnativeproject-e1053.firebaseapp.com",
    projectId: "reactnativeproject-e1053",
    storageBucket: "reactnativeproject-e1053.appspot.com",
    messagingSenderId: "96195106857",
    appId: "1:96195106857:web:a0ee54c12374f8521ce438",
    measurementId: "G-L622ZLJFC7"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
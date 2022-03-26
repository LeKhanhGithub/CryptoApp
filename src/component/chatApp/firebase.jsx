// import firebase from 'firebase/app';
// import "firebase/auth";

// export const auth = firebase.initializeApp({
//     apiKey: "AIzaSyAsl7ST5MMCeGoOIkLEWrAUCyh0XnJCYGc",
//     authDomain: "unichat-db799.firebaseapp.com",
//     projectId: "unichat-db799",
//     storageBucket: "unichat-db799.appspot.com",
//     messagingSenderId: "1098037836337",
//     appId: "1:1098037836337:web:d18bd80c4d9e6ccde5f310"
//   }).auth();


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAsl7ST5MMCeGoOIkLEWrAUCyh0XnJCYGc",
    authDomain: "unichat-db799.firebaseapp.com",
    projectId: "unichat-db799",
    storageBucket: "unichat-db799.appspot.com",
    messagingSenderId: "1098037836337",
    appId: "1:1098037836337:web:d18bd80c4d9e6ccde5f310"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
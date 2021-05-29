import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYG8mgyVPup0myt3V-Wux79jFCjR33cXA",
  authDomain: "devchat2-e0740.firebaseapp.com",
  projectId: "devchat2-e0740",
  storageBucket: "devchat2-e0740.appspot.com",
  messagingSenderId: "369266833725",
  appId: "1:369266833725:web:20de074c4eaa846de5ad54",
  measurementId: "G-9JR765RB9J",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSlXwTxpPtotdlCDMZUVaGCHzDPfBe7CM",
    authDomain: "signet-4b02b.firebaseapp.com",
    projectId: "signet-4b02b",
    storageBucket: "signet-4b02b.appspot.com",
    messagingSenderId: "832467340854",
    appId: "1:832467340854:web:ac6e5dde706254b1289297",
    measurementId: "G-CFBP1KN3V6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //initialiser firebaseUI
  export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

  //initialiser Firestore
  export const insatanceFirestore = firebase.firestore();
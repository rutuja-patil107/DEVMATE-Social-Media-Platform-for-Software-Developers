import {initializeApp}  from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

function initializeFirebase(){
  const firebaseConfig = {
  apiKey: "AIzaSyAMCem1Cr20tIVg9JvoeyGWq7R0h7jJG1s",
  authDomain: "devmate-60c8a.firebaseapp.com",
  databaseURL: "https://devmate-60c8a-default-rtdb.firebaseio.com",
  projectId: "devmate-60c8a",
  storageBucket: "devmate-60c8a.appspot.com",
  messagingSenderId: "665709317326",
  appId: "1:665709317326:web:f2266ea35af52fabf1149f",
  measurementId: "G-KV3SY11FBL"
};
  initializeApp(firebaseConfig);
  //firebase.firestore().settings({ experimentalForceLongPolling: true });
}


export default initializeFirebase;
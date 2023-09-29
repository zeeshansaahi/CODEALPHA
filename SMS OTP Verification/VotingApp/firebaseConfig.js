// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getAuth } from "firebase/auth";
// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDENRbrYfBNviIOeP9RQmquBy4nW1OpPpo",
  authDomain: "votingapp-4ec0b.firebaseapp.com",
  databaseURL: "https://votingapp-4ec0b.firebaseio.com",
  projectId: "votingapp-4ec0b",
  storageBucket: "votingapp-4ec0b.appspot.com",
  messagingSenderId: "sender-id",
  appId: "1:181740716932:android:4185b56d1f0de45f9293d1",
  measurementId: "G-measurement-id",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

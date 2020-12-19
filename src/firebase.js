import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAG7ws8zG-DIQW7ef6P4AL_OLOnS2jR8ss",
  authDomain: "todo-app-19d7f.firebaseapp.com",
  projectId: "todo-app-19d7f",
  storageBucket: "todo-app-19d7f.appspot.com",
  messagingSenderId: "264783078021",
  appId: "1:264783078021:web:27ad1b6e4f32a08516bfec",
  measurementId: "G-XQ18K9S6BY",
});

const db = firebaseApp.firestore();

export default db;

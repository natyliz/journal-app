import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyTZzK3vVzEpTEE3LxIX5EukiACocEWOk",
    authDomain: "react-app-cursos-f09bb.firebaseapp.com",
    projectId: "react-app-cursos-f09bb",
    storageBucket: "react-app-cursos-f09bb.appspot.com",
    messagingSenderId: "828509931111",
    appId: "1:828509931111:web:9af02d7f2d95233ea9f6c2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase

  }
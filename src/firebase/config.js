import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKS8IXuFnKnRTUi2x9MrHcFLPJjpE4tLE",
    authDomain: "mymoney-adfd8.firebaseapp.com",
    projectId: "mymoney-adfd8",
    storageBucket: "mymoney-adfd8.appspot.com",
    messagingSenderId: "158341603970",
    appId: "1:158341603970:web:8d09fa7551986ec588ca9b"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init service

  const projectFirestore = firebase.firestore()

export {projectFiresa}
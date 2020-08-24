import firebase from "firebase";
// import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZys109zc05zvZC3gdeEhzJW6swShDFiI",
  authDomain: "knack-in.firebaseapp.com",
  databaseURL: "https://knack-in.firebaseio.com",
  projectId: "knack-in",
  storageBucket: "knack-in.appspot.com",
  messagingSenderId: "936920753752",
  appId: "1:936920753752:web:45b8a678ff0ead6226cc2d",
  measurementId: "G-BMHY9CV0Z4",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export firebase firestore
export default firebaseApp.firestore();

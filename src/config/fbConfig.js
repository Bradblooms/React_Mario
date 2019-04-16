import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAgbYKEehAIWPkxDYiVKiSFNiQexFHJEdo",
  authDomain: "mario-react-412cb.firebaseapp.com",
  databaseURL: "https://mario-react-412cb.firebaseio.com",
  projectId: "mario-react-412cb",
  storageBucket: "mario-react-412cb.appspot.com",
  messagingSenderId: "994240430488"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

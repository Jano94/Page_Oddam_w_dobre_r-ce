import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCrx8lWSzuC0oJ_5NK08nhGqOVfzJL7PAE",
    authDomain: "oddam-w-dobre.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre.firebaseio.com",
    projectId: "oddam-w-dobre",
    storageBucket: "oddam-w-dobre.appspot.com",
    messagingSenderId: "721241011776",
    appId: "1:721241011776:web:96ff5de482e167704391a5",
    measurementId: "G-E412F9DC80"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore.settings({timestampsInSnapshots: true});

export default firebase;

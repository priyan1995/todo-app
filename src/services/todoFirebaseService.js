import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwP5SwMn7g71Tz_s734F0mkw6-IgNSGPo",
    authDomain: "todo-app-f7f94.firebaseapp.com",
    projectId: "todo-app-f7f94",
    storageBucket: "todo-app-f7f94.appspot.com",
    messagingSenderId: "725940901236",
    appId: "1:725940901236:web:13b902d970737d80754821"
}

const db = firebase.initializeApp(firebaseConfig).firestore();

export default db;
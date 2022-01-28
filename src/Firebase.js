import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOsaRUC5cIAwptRqYh8QIhHDXVTkuXMFc",
    authDomain: "embargo-69468.firebaseapp.com",
    projectId: "embargo-69468",
    storageBucket: "embargo-69468.appspot.com",
    messagingSenderId: "805071427143",
    appId: "1:805071427143:web:27daa445928f8d00170362",
    measurementId: "G-8P2V34RJG6"
  };
const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
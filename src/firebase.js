import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCkpEIfaCq0SuOOin08FPSCJlUwYnbpWwA",
    authDomain: "devjob-611ac.firebaseapp.com",
    projectId: "devjob-611ac",
    storageBucket: "devjob-611ac.appspot.com",
    messagingSenderId: "699245833428",
    appId: "1:699245833428:web:63887c6ffd4997fca7df41"
});

export const auth = app.auth();

export default app;
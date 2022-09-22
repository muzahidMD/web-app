// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2hACHkM4v4K1v7MEAmbUDaewW7rjlRNU",
    authDomain: "bikers-budget.firebaseapp.com",
    projectId: "bikers-budget",
    storageBucket: "bikers-budget.appspot.com",
    messagingSenderId: "734284616995",
    appId: "1:734284616995:web:74bd138482305c30656896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
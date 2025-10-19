// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQdxtWfj0mtleSvkM3RC1acqFt93wacWU",
  authDomain: "clinic-auth-7506d.firebaseapp.com",
  projectId: "clinic-auth-7506d",
  storageBucket: "clinic-auth-7506d.firebasestorage.app",
  messagingSenderId: "412485685047",
  appId: "1:412485685047:web:c29a72951b7f4eb405d4b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
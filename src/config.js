// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjpGKRYXvgl1ClK7fgaRkw4D4yp_KZnMg",
  authDomain: "fir-2e21c.firebaseapp.com",
  projectId: "fir-2e21c",
  storageBucket: "fir-2e21c.firebasestorage.app",
  messagingSenderId: "446549442059",
  appId: "1:446549442059:web:0667d4bd574eeae8ed910e",
  measurementId: "G-XJHLM51DKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

// Google login function
const handleGoogleLogin = async (setError) => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    console.log("Google Sign-In:", result.user);
    setError(""); // clear error if successful
    alert(`Welcome ${result.user.displayName} 🎉`);

     if (role === "admin") navigate("/adminpage");
    else if (role === "doctor") navigate("/doctorpage");
    else navigate("/userpage"); 
    
  } catch (error) {
    console.error(error);
    setError("Google sign-in failed ❌");
  }
};

const handleSubmit = async (e, setError) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCred.user);
        setError('');
    } catch (err) {
        console.log(err);
        setError('Invalid email or password');
    }
    e.target.reset();}

export { auth, googleAuthProvider, handleGoogleLogin, handleSubmit };

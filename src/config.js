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
const handleGoogleLogin = async (setError, navigate) => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    const user = result.user;
    console.log("Google Sign-In:", user);
    setError(""); // clear error if successful

    // Check if role already exists in Firestore
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    const roleInFirestore = userSnap.exists() && userSnap.data().role;

    if (!roleInFirestore) {
      // New Google user → go to RoleSelect page
      navigate("/role-select");
    } else {
      // Existing user → redirect based on role
      const role = roleInFirestore;
      if (role === "doctor") navigate("/doctorpage");
      else if (role === "admin") navigate("/adminpage");
      else navigate("/userpage");
    }

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

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRcM-5HS8qGfjjlUCZsQoYVSuWJ4mLUP4",
  authDomain: "zerodhaclonee.firebaseapp.com",
  projectId: "zerodhaclonee",
  storageBucket: "zerodhaclonee.firebasestorage.app",
  messagingSenderId: "1096588590911",
  appId: "1:1096588590911:web:97dd1829204d084b2b5d8a",
  measurementId: "G-279TJ1G1JK"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
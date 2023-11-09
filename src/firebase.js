
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBnymco96n7bB40YnVvTR9NDCT4fnHvpKk",
  authDomain: "peterren-website.firebaseapp.com",
  projectId: "peterren-website",
  storageBucket: "peterren-website.appspot.com",
  messagingSenderId: "983580161159",
  appId: "1:983580161159:web:4209da163785827176f422",
  measurementId: "G-5EBT224EJ7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
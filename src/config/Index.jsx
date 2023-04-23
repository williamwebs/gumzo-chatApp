import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEZDX0xfsvkAJnSDPY7WyTmU15boSuBY",
  authDomain: "gumzo-d9397.firebaseapp.com",
  projectId: "gumzo-d9397",
  storageBucket: "gumzo-d9397.appspot.com",
  messagingSenderId: "41659025544",
  appId: "1:41659025544:web:d62d6547151836a8c1b73d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Create a root reference
const storage = getStorage();

// db
const db = getFirestore();

export { app, auth, storage, db };

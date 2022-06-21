// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyfHUwo6fOGzN7iX2FFPV_JgW4c-8l-v4",
  authDomain: "react-instagram-clone-b4043.firebaseapp.com",
  projectId: "react-instagram-clone-b4043",
  storageBucket: "react-instagram-clone-b4043.appspot.com",
  messagingSenderId: "1078123416019",
  appId: "1:1078123416019:web:205fbbc945c347b0884726",
  measurementId: "G-2C01DGBBYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { auth };

export default db;

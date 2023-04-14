// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDClcKFW5si9H7SmbgTLtuOrmT2rHkEWAI",
  authDomain: "murointeractivo-48fdf.firebaseapp.com",
  projectId: "murointeractivo-48fdf",
  storageBucket: "murointeractivo-48fdf.appspot.com",
  messagingSenderId: "551359575018",
  appId: "1:551359575018:web:e1c2d392d81b29ded23893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
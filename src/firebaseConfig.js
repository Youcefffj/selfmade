// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Vérifie bien cet import !

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArcD1o1yXWOfB_OMDguoBBboo2uhahzF4",
  authDomain: "selfmade-e4134.firebaseapp.com",
  projectId: "selfmade-e4134",
  storageBucket: "selfmade-e4134.firebasestorage.app",
  messagingSenderId: "385185121664",
  appId: "1:385185121664:web:589bea9643abf8ee6ded65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore (Base de données)
const db = getFirestore(app);

export { db };
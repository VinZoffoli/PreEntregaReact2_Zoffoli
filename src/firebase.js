// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDktrS1fkLMM_wTCKl1ORa_aZ0_hej5PyI",
  authDomain: "popoki-7c4b5.firebaseapp.com",
  projectId: "popoki-7c4b5",
  storageBucket: "popoki-7c4b5.appspot.com",
  messagingSenderId: "465949567473",
  appId: "1:465949567473:web:69b3e748f87d66e895fc50",
  measurementId: "G-4Y51MZ34PB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

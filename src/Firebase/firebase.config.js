// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhE7LiQt6RQcnhFrDPlT3tnV36Et9Ft5w",
  authDomain: "plant-care-tracker-5b57e.firebaseapp.com",
  projectId: "plant-care-tracker-5b57e",
  storageBucket: "plant-care-tracker-5b57e.firebasestorage.app",
  messagingSenderId: "678774763512",
  appId: "1:678774763512:web:61dd418b6c87f5f2c7700d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
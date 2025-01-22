// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8P56LS_YnSotDJJsjPDjZtLqNiPQEOUo",
  authDomain: "yapper-ai-bot.firebaseapp.com",
  projectId: "yapper-ai-bot",
  storageBucket: "yapper-ai-bot.appspot.com",
  messagingSenderId: "982335835743",
  appId: "1:982335835743:web:027001abe6785eb96c95ea",
  measurementId: "G-8MWE049HKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth}

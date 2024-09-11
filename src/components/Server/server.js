// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   // apiKey: import.meta.env.VITE_REACT_FIREBASE_API,
//   apiKey: "AIzaSyB8P56LS_YnSotDJJsjPDjZtLqNiPQEOUo",
//   authDomain: "yapper-ai-bot.firebaseapp.com",
//   projectId: "yapper-ai-bot",
//   storageBucket: "yapper-ai-bot.appspot.com",
//   // messagingSenderId: import.meta.env.VITE_REACT_FIREBASE_MESSAGE_SENDER_ID,
//   // appId: import.meta.env.VITE_REACT_FIREBASE_APP_ID,
//   // measurementId: import.meta.env.VITE_REACT_FIREBASE_MEASUREMENT_ID,
//   messagingSenderId: "982335835743",
//   appId: "1:982335835743:web:027001abe6785eb96c95ea",
//   measurementId: "G-8MWE049HKZ",
// };



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
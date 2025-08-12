// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtLfg-tdkTkfxx2DT62eB6cuiGZpWxKLg",
  authDomain: "mrexpert-c38d8.firebaseapp.com",
  projectId: "mrexpert-c38d8",
  storageBucket: "mrexpert-c38d8.firebasestorage.app",
  messagingSenderId: "339776802176",
  appId: "1:339776802176:web:643cc7843cabccc662c565",
  measurementId: "G-EPMGZ00PFK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

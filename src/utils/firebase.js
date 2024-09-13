// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA5LfwPfkDeQuVvIoQw6SaHuGZ8zepgXc",
  authDomain: "netflixgpt-f3c60.firebaseapp.com",
  projectId: "netflixgpt-f3c60",
  storageBucket: "netflixgpt-f3c60.appspot.com",
  messagingSenderId: "173975831262",
  appId: "1:173975831262:web:4db34a8e81c3616603f84f",
  measurementId: "G-2EWS94BNJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
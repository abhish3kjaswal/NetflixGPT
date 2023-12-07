// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCivKkOx3ShUnDatVP4fJXniT5pckIgeL4",
  authDomain: "netflixgpt-cb143.firebaseapp.com",
  projectId: "netflixgpt-cb143",
  storageBucket: "netflixgpt-cb143.appspot.com",
  messagingSenderId: "300033116830",
  appId: "1:300033116830:web:648c305f2298660f43898f",
  measurementId: "G-MWC8VEEGK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
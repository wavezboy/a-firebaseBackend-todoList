// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgvRZKsyqbxH_4Z_jEua_M2uEkUvrWjWU",
  authDomain: "todo-list-26d95.firebaseapp.com",
  projectId: "todo-list-26d95",
  storageBucket: "todo-list-26d95.appspot.com",
  messagingSenderId: "388039607312",
  appId: "1:388039607312:web:79da2840bc2b72f809b695",
  measurementId: "G-5ZH90ESYQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

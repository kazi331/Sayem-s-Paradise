// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt8BABEw3EHO1gba7N5OYOPIYDbmwVjCo",
  authDomain: "assignment-10-fix.firebaseapp.com",
  projectId: "assignment-10-fix",
  storageBucket: "assignment-10-fix.appspot.com",
  messagingSenderId: "378647389839",
  appId: "1:378647389839:web:a519d6e1968f4ee78c32fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

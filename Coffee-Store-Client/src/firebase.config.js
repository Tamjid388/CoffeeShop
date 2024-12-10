// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5z6L7mP--yzYUJ68V7uzWhFtmiWTcBPI",
  authDomain: "coffee-store-5f67d.firebaseapp.com",
  projectId: "coffee-store-5f67d",
  storageBucket: "coffee-store-5f67d.firebasestorage.app",
  messagingSenderId: "448896642145",
  appId: "1:448896642145:web:78266e45d543ba1f384e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Firebase Authentication and get a reference to the service

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkgyMs-hOAtv7mTRF12fod2CbOSKhU_Jk",
  authDomain: "petwarmpaw.firebaseapp.com",
  projectId: "petwarmpaw",
  storageBucket: "petwarmpaw.firebasestorage.app",
  messagingSenderId: "120200224658",
  appId: "1:120200224658:web:92c03a17e0f290153a2b4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

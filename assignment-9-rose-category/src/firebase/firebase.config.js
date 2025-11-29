// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Firebase Authentication and get a reference to the service

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk_CXjYe_y794fG1_x-tFilumxWK1YAjQ",
  authDomain: "warm-paws-96023.firebaseapp.com",
  projectId: "warm-paws-96023",
  storageBucket: "warm-paws-96023.firebasestorage.app",
  messagingSenderId: "1052063350610",
  appId: "1:1052063350610:web:e214c8e291f13791b2048b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

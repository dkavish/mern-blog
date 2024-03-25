// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4b6fb.firebaseapp.com",
  projectId: "mern-blog-4b6fb",
  storageBucket: "mern-blog-4b6fb.appspot.com",
  messagingSenderId: "389589573260",
  appId: "1:389589573260:web:86c0f61720ec77aa46e5a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


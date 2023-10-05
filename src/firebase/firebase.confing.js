// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAapVAfThL4OqoVyaTaTdQQFOmIPfe6H6Y",
  authDomain: "react-dreagon-news-51b58.firebaseapp.com",
  projectId: "react-dreagon-news-51b58",
  storageBucket: "react-dreagon-news-51b58.appspot.com",
  messagingSenderId: "1085410180595",
  appId: "1:1085410180595:web:7e405d62b8cef7eecfa686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
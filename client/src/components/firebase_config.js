import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVUjvrvL2-_Tt--hjeh8PTc3QcP7mF9Aw",
  authDomain: "verify-8f6ce.firebaseapp.com",
  projectId: "verify-8f6ce",
  storageBucket: "verify-8f6ce.appspot.com",
  messagingSenderId: "240940169235",
  appId: "1:240940169235:web:cd048a296a4c1d302ea7e6",
  measurementId: "G-01KZL5E2L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
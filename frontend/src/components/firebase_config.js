import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBVUjvrvL2-_Tt--hjeh8PTc3QcP7mF9Aw",
    authDomain: "verify-8f6ce.firebaseapp.com",
    projectId: "verify-8f6ce",
    storageBucket: "verify-8f6ce.appspot.com",
    messagingSenderId: "240940169235",
    appId: "1:240940169235:web:69b2f416085815bb2ea7e6",
    measurementId: "G-WGV79DGM64"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;
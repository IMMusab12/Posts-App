// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeR2XuZCW4GoPfOfJXn7ocxjYbHSHkD5k",
  authDomain: "postbitz-9f631.firebaseapp.com",
  projectId: "postbitz-9f631",
  storageBucket: "postbitz-9f631.firebasestorage.app",
  messagingSenderId: "1043371300364",
  appId: "1:1043371300364:web:b1fb6af93bc36653470029",
  measurementId: "G-JDWW1T4885"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACo_pEXzA3M0FqwmUI8FMP5cLRympblyI",
  authDomain: "porfolio-2a043.firebaseapp.com",
  projectId: "porfolio-2a043",
  storageBucket: "porfolio-2a043.firebasestorage.app",
  messagingSenderId: "556914369266",
  appId: "1:556914369266:web:35082c50e241985499266b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore y exporta
export const db = getFirestore(app);

// Inicializa Authentication
export const auth = getAuth(app);





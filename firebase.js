import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// La teva config (correcta)
const firebaseConfig = {
  apiKey: "AIzaSyBp0BHkCJCVVVC3PIgd_yGj7yQ_1c6n21I",
  authDomain: "gameguessr-4ec51.firebaseapp.com",
  projectId: "gameguessr-4ec51",
  storageBucket: "gameguessr-4ec51.appspot.com",
  messagingSenderId: "86634978886",
  appId: "1:86634978886:web:e6abc7618d3f5e8b2a7447",
  measurementId: "G-GTF35S0EGW"
};

// Inicialitza Firebase
const app = initializeApp(firebaseConfig);

// Inicialitza Firestore
export const db = getFirestore(app);

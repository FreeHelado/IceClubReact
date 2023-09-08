import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBf9BEXHe8A8vZm6A2SlmD9LPkF_iiYc0",
  authDomain: "iceclub-fa533.firebaseapp.com",
  projectId: "iceclub-fa533",
  storageBucket: "iceclub-fa533.appspot.com",
  messagingSenderId: "464277195441",
  appId: "1:464277195441:web:e7d52d8605b03ad58f3090"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
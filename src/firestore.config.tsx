import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDKyBzqXJlw22JxpgR_s2MP6S3X66r-LFk",
  authDomain: "stadafintab-a72bf.firebaseapp.com",
  projectId: "stadafintab-a72bf",
  storageBucket: "stadafintab-a72bf.appspot.com",
  messagingSenderId: "1084861966221",
  appId: "1:1084861966221:web:24cce473cd7d9763c9bfc4",
  measurementId: "G-LMCBG81Q92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

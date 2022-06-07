import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe1pMvqomXYXxnmR-THNBtJtOjLhaq0qE",
  authDomain: "house-marketplace-52352.firebaseapp.com",
  projectId: "house-marketplace-52352",
  storageBucket: "house-marketplace-52352.appspot.com",
  messagingSenderId: "262261767750",
  appId: "1:262261767750:web:147c00f72d3707cd31d447",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

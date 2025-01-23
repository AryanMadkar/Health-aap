// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMfrb8cf79dfFAzIYvAr3ZZLfCWdr2x5M",
  authDomain: "health-aap.firebaseapp.com",
  projectId: "health-aap",
  storageBucket: "health-aap.firebasestorage.app",
  messagingSenderId: "577204694554",
  appId: "1:577204694554:web:be827f7691bca2d1bcaba3",
  measurementId: "G-P7QZPE2ZXK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

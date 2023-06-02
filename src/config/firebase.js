// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzdWhFaXMKwUGYRITKE6gX4NYggjaqkhs",
  authDomain: "oddaj-rzeczy-d1407.firebaseapp.com",
  projectId: "oddaj-rzeczy-d1407",
  storageBucket: "oddaj-rzeczy-d1407.appspot.com",
  messagingSenderId: "994172339976",
  appId: "1:994172339976:web:0db659c9f3c9a4b9e84ebd",
  measurementId: "G-X16ETZQ3SY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

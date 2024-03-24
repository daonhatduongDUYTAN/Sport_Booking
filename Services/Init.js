// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore-lite.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeG5KFWPEchmDydH4-ATLnUVwoagcaY30",
  authDomain: "sportbooking-19ba8.firebaseapp.com",
  databaseURL: "https://sportbooking-19ba8-default-rtdb.firebaseio.com",
  projectId: "sportbooking-19ba8",
  storageBucket: "sportbooking-19ba8.appspot.com",
  messagingSenderId: "955624268443",
  appId: "1:955624268443:web:f1125b5126fbf6d0d51c3e",
  measurementId: "G-7CGD4B7GB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db_cloud = getFirestore(app);

export {db_cloud, collection, getDocs, addDoc, updateDoc, deleteDoc };
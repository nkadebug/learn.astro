import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzRZmGO_rCxZ9fQtke1mWLo2VTWlo8o9Y",
  authDomain: "nka-debug.firebaseapp.com",
  databaseURL: "https://nka-debug.firebaseio.com",
  projectId: "nka-debug",
  storageBucket: "nka-debug.appspot.com",
  messagingSenderId: "67875787813",
  appId: "1:67875787813:web:deade8f0273cfddd8e5bcc",
  measurementId: "G-11P0VCEX2G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log('client : firebase : app');
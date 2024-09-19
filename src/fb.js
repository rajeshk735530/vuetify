// Import the necessary functions from Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const config = {
  apiKey: "AIzaSyDvC4fhKsxHgPjoeFDi6zfM-i3Wxuu4eVs",
  authDomain: "vue-rk.firebaseapp.com",
  projectId: "vue-rk",
  storageBucket: "vue-rk.appspot.com",
  messagingSenderId: "119358528165",
  appId: "1:119358528165:web:01fe7027a3313da0874b4c",
  measurementId: "G-7ZQ67SSP9H"
};

// Initialize Firebase
const app = initializeApp(config);
const db = getFirestore(app);


// Export the Firestore database instance
export default db;

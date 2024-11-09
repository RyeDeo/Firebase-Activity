import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0Bvamyr4HvkDM9ZZTdp2Wals89LTUPIg",
    authDomain: "fir-rylo.firebaseapp.com",
    projectId: "fir-rylo",
    storageBucket: "fir-rylo.firebasestorage.app",
    messagingSenderId: "644993159356",
    appId: "1:644993159356:web:e8b0c07cc2d72ad9ff40b9",
    measurementId: "G-31W15T7F89"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
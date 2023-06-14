import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr-x6bIuFTG4WlNyV0bHR8my6gKldj24s",
  authDomain: "libreria-bs-as.firebaseapp.com",
  projectId: "libreria-bs-as",
  storageBucket: "libreria-bs-as.appspot.com",
  messagingSenderId: "658966355511",
  appId: "1:658966355511:web:3b0cf7df876764f3e9e9b2"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
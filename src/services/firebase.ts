import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDIIorQ_NyhnHzu9Y53jcxZ5mnwNCSPv8",
  authDomain: "andromeda-a5f30.firebaseapp.com",
  projectId: "andromeda-a5f30",
  storageBucket: "andromeda-a5f30.appspot.com",
  messagingSenderId: "90061772891",
  appId: "1:90061772891:web:f647783184800ae36dc77e",
  measurementId: "G-3W3LSZY97D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
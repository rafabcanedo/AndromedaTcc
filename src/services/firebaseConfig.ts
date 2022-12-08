import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxi1QmmRb_L2Kx3ENm-v_d1N_5bNxZUy4",
  authDomain: "fir-69eb7.firebaseapp.com",
  projectId: "fir-69eb7",
  storageBucket: "fir-69eb7.appspot.com",
  messagingSenderId: "613046319836",
  appId: "1:613046319836:web:b37b6446129a8028ddd219",
  measurementId: "G-E4ZYQZLVPM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
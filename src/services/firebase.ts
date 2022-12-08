import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIrlf6vPxvQP6cpg7zcRE4qdY7BkBdu1o",
  authDomain: "andromeda-a8043.firebaseapp.com",
  projectId: "andromeda-a8043",
  storageBucket: "andromeda-a8043.appspot.com",
  messagingSenderId: "858489805165",
  appId: "1:858489805165:web:865f6c780be9394f9a6264",
  measurementId: "G-2TBVM6SF7R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
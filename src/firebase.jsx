import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW1PPU8V_IFfhUvX9BttQgzxk9aaCkBNc",
  authDomain: "todo-app-ecd96.firebaseapp.com",
  projectId: "todo-app-ecd96",
  storageBucket: "todo-app-ecd96.appspot.com",
  messagingSenderId: "949216469652",
  appId: "1:949216469652:web:fc20160fecb5c0b550ca81",
  measurementId: "G-GDM6NFQKR0"
};

const app=initializeApp(firebaseConfig);  
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db=getFirestore(app);
export { auth, provider,db };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDidKiYgrleP5ZsiB0J8HLqGyOqQkqiMo",
  authDomain: "linked-in-2d243.firebaseapp.com",
  projectId: "linked-in-2d243",
  storageBucket: "linked-in-2d243.appspot.com",
  messagingSenderId: "683253849578",
  appId: "1:683253849578:web:7512945b3b525538c6e693",
  measurementId: "G-5V9XQDPCMS" 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

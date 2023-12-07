import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB14FaKgZj9xO1LXa7IN1ODmGY_IBD3xhs",
  authDomain: "realtimechat-da344.firebaseapp.com",
  databaseURL: "https://realtimechat-da344-default-rtdb.firebaseio.com",
  projectId: "realtimechat-da344",
  storageBucket: "realtimechat-da344.appspot.com",
  messagingSenderId: "897423920039",
  appId: "1:897423920039:web:03646e97fef09bd69f4482",
  measurementId: "G-2HZJ61XRED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

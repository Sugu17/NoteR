import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8eXvBgkZtQCgjQWyzAiWTHJ14gF1Ltps",
  authDomain: "noter-b05db.firebaseapp.com",
  projectId: "noter-b05db",
  storageBucket: "noter-b05db.appspot.com",
  messagingSenderId: "179061512924",
  appId: "1:179061512924:web:a457df1782f9702d36f219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const notesCollection=collection(db,"notes");

export {notesCollection};
export {db};
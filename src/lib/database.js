import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDhF3KjPD5C8q71Dnhz5ynfIj-TfW4vtDA",
  authDomain: "lin-team.firebaseapp.com",
  projectId: "lin-team",
  storageBucket: "lin-team.appspot.com",
  messagingSenderId: "170909696055",
  appId: "1:170909696055:web:b66958e9bf5271f9dc3fb2",
  measurementId: "G-24BGQZLEBX",
  databaseURL: "https://lin-team-default-rtdb.europe-west1.firebasedatabase.app/"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db }
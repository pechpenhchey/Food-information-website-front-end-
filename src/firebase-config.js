import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVZBd3yAYwLZN3msMszDlYqFupcLjMcHA",
    authDomain: "fooddatabase-4fcae.firebaseapp.com",
    projectId: "fooddatabase-4fcae",
    storageBucket: "fooddatabase-4fcae.appspot.com",
    messagingSenderId: "150088653320",
    appId: "1:150088653320:web:820190644ee2b0e47a4fbd",
    measurementId: "G-JCDQ63YCD2"
  };
  
  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
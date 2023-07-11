import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWsTjTjEf9VkCZjB4KgUlduLFN0D7V_Fw",
  authDomain: "native-45e66.firebaseapp.com",
  databaseURL:
    "https://native-45e66-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "native-45e66",
  storageBucket: "native-45e66.appspot.com",
  messagingSenderId: "174108298108",
  appId: "1:174108298108:web:0102b7f16349348859b2f9",
  measurementId: "G-32VFR0B72Y",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

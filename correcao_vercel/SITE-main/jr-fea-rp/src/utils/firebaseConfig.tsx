// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUhDzyw2w7WxWEAlY68snMI7cbzt6huhA",
  authDomain: "fea-jr-rp.firebaseapp.com",
  databaseURL: "https://fea-jr-rp-default-rtdb.firebaseio.com",
  projectId: "fea-jr-rp",
  storageBucket: "fea-jr-rp.firebasestorage.app",
  messagingSenderId: "186147723817",
  appId: "1:186147723817:web:328ce388ec015c51f31a38",
  measurementId: "G-5N6PYYQSF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

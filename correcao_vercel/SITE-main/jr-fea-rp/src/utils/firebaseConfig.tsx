// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdQMpPGO6sFeXZxjPOSVwzASp7C8I2zqA",
  databaseURL: "https://fea-jr-rp-default-rtdb.firebaseio.com",
  authDomain: "jr-fea-rp.firebaseapp.com",
  projectId: "jr-fea-rp",
  storageBucket: "jr-fea-rp.firebasestorage.app",
  messagingSenderId: "265646020851",
  appId: "1:265646020851:web:f4869961a533242c21ff86",
  measurementId: "G-HXEDF9YPDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);



export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

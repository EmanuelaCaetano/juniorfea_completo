import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Adicione o Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCdQMpPGO6sFeXZxjPOSVwzASp7C8I2zqA",
  authDomain: "jr-fea-rp.firebaseapp.com",
  projectId: "jr-fea-rp",
  storageBucket: "jr-fea-rp.firebasestorage.app",
  messagingSenderId: "265646020851",
  appId: "1:265646020851:web:f4869961a533242c21ff86",
  measurementId: "G-HXEDF9YPDS"
};

let firebaseApp: FirebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp); // Exportar Firestore
export default firebaseApp;

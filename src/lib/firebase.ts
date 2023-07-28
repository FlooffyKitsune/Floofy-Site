import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBg7IA3-i53eqQAPs8Nfeqo_KIiq-kp_Zk",
    authDomain: "flooffy-site.firebaseapp.com",
    projectId: "flooffy-site",
    storageBucket: "flooffy-site.appspot.com",
    messagingSenderId: "442607946672",
    appId: "1:442607946672:web:b0903aeaf7e66bcc7a2475",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
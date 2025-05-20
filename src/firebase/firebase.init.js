// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxBBgPPNayRFMmE136dUGSVcM0699aU_4",
    authDomain: "hobbins-277aa.firebaseapp.com",
    projectId: "hobbins-277aa",
    storageBucket: "hobbins-277aa.firebasestorage.app",
    messagingSenderId: "767907272409",
    appId: "1:767907272409:web:7e7a67502208075bb650c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
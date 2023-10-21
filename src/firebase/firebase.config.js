// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLcM0sElgv5p9x89vICfROQrPViK7Jpt0",
    authDomain: "geargal-automotive.firebaseapp.com",
    projectId: "geargal-automotive",
    storageBucket: "geargal-automotive.appspot.com",
    messagingSenderId: "14346034892",
    appId: "1:14346034892:web:d79103bddcc751ce7aac69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
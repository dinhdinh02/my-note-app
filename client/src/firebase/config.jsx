// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSjcBsYQTG_3hKotYYz4sdjyr8EgnSEoA",
  authDomain: "note-app-holetex-d00a3.firebaseapp.com",
  projectId: "note-app-holetex-d00a3",
  storageBucket: "note-app-holetex-d00a3.appspot.com",
  messagingSenderId: "343747847234",
  appId: "1:343747847234:web:d4ecc557528be9cde779db",
  measurementId: "G-87HKP2ZTWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
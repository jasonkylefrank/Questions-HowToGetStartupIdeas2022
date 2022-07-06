// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt2UuuS55GXVQPwzMI6-azNAMKR9uPQpI",
  authDomain: "startupideas-questions-2022.firebaseapp.com",
  projectId: "startupideas-questions-2022",
  storageBucket: "startupideas-questions-2022.appspot.com",
  messagingSenderId: "702046366312",
  appId: "1:702046366312:web:57c39dd1b9b45eae7b69dd",
  measurementId: "G-5N3WJBTWT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
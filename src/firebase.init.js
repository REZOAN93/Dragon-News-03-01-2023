// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuSLtozFANiRxIAELNNynx3RDkTrlnzGw",
  authDomain: "authn-5da70.firebaseapp.com",
  projectId: "authn-5da70",
  storageBucket: "authn-5da70.appspot.com",
  messagingSenderId: "958967430101",
  appId: "1:958967430101:web:963e1bc664675150de1b5c",
  measurementId: "G-P6P4MQJD6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

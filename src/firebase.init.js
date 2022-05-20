// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR428fsfjO9cswJ_V1YrcY7539lPIpORA",
  authDomain: "fruits-warehouse-managem-6151a.firebaseapp.com",
  projectId: "fruits-warehouse-managem-6151a",
  storageBucket: "fruits-warehouse-managem-6151a.appspot.com",
  messagingSenderId: "222137574133",
  appId: "1:222137574133:web:568d96b3025c3607e19bbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
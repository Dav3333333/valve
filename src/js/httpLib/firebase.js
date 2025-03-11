// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpHNh4L8RqmJ7Lp6bh0FiCe_PyOmLNNE4",
  authDomain: "resto-a5f4c.firebaseapp.com",
  projectId: "resto-a5f4c",
  storageBucket: "resto-a5f4c.firebasestorage.app",
  messagingSenderId: "531584673500",
  appId: "1:531584673500:web:e5bcc4de6a7e5ac205b619"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

class FireBase{
    #app;
    constructor() {
        this.#app = initializeApp(firebaseConfig)
        return this.#app;
    } 
}

// export fire base
export const firebase = new FireBase()
export const db = getFirestore(firebase);
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDr9PA2eQBi2P0GS2usZRZycdctpT8XCB8",
  authDomain: "auth-d2c99.firebaseapp.com",
  projectId: "auth-d2c99",
  storageBucket: "auth-d2c99.appspot.com",
  messagingSenderId: "995229383208",
  appId: "1:995229383208:web:8a6a475a3e57ee2ae2931d"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 
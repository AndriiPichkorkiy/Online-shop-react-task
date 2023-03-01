// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { NotificationManager } from "react-notifications";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMFjFjGEnQCNKhCTycpd0iLhCUUADKjCs",
  authDomain: "testing-work-daffa.firebaseapp.com",
  projectId: "testing-work-daffa",
  storageBucket: "testing-work-daffa.appspot.com",
  messagingSenderId: "759130100213",
  appId: "1:759130100213:web:6f378516c86d44bf4210bc",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const apiAuth = {
  signUp: async ({ email, password, name }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    } catch (error) {
      NotificationManager.error(error.message, "Auth error", 5000);
      throw error;
    }
  },

  signIn: async ({ email, password }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (error) {
      NotificationManager.error(error.message, "Auth error", 5000);
      throw error;
    }
  },
};

export default apiAuth;

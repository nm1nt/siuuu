// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSrGjt4bvlgnZKtPi_iG_R3Kqd9DOvLLM",
  authDomain: "jsi07-8b538.firebaseapp.com",
  projectId: "jsi07-8b538",
  storageBucket: "jsi07-8b538.appspot.com",
  messagingSenderId: "236267788502",
  appId: "1:236267788502:web:d4dcf1fdd6a3bdf1c05177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // khoi tao firebase project
export const auth = getAuth(app)  // bien auth bay gio se su dung thay cho ham getAuth voi config la bien app dc khoi tao tu firebase
export const db = getFirestore(app) // khai bao cho firebase biet minh se su dung firestore database thong qua bien database voi config chinh la bien app khoi tao boi firebaseConfig

export const ROOM_CHAT_COLLECTION = 'Global_Chat' // khai bao ten collection
export const FIREBASE_COLLECTION = 'Songs'



export const actionCodeSettings = {
    url: 'http://localhost:5173/',
    handleCodeInApp: true,
}
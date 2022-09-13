
import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getStorage } from '@firebase/storage';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7-8XB7ZSuWEKMTbDwqezy2qh83C39PlE",
  authDomain: "camslays-60411.firebaseapp.com",
  projectId: "camslays-60411",
  storageBucket: "camslays-60411.appspot.com",
  messagingSenderId: "1077945002105",
  appId: "1:1077945002105:web:0459ec709a36e5410e4ca8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
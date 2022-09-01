// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBUveh_vVBxqRgUGFNs_xOQpJIPPoHpEFE',
  authDomain: 'popshap-demo.firebaseapp.com',
  projectId: 'popshap-demo',
  storageBucket: 'popshap-demo.appspot.com',
  messagingSenderId: '163707381679',
  appId: '1:163707381679:web:73d1dbbb33d411111d715a',
  measurementId: 'G-V1NQENMQ0Z'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// official
// const firebaseConfig = {
//   apiKey: 'AIzaSyDqUTZJhUHwBu8yp8Q7Gmm_KsLAgvBk_K4',
//   authDomain: 'react-cursos-1b8be.firebaseapp.com',
//   projectId: 'react-cursos-1b8be',
//   storageBucket: 'react-cursos-1b8be.appspot.com',
//   messagingSenderId: '222508904403',
//   appId: '1:222508904403:web:1cc06249c6da112d25c926'
// };

// // for testing
// const firebaseConfig = {
//   apiKey: 'AIzaSyBw5BybaG17TW9lOwkqJJ2A9YHFr_PQPEY',
//   authDomain: 'testing-d6945.firebaseapp.com',
//   projectId: 'testing-d6945',
//   storageBucket: 'testing-d6945.appspot.com',
//   messagingSenderId: '463457247371',
//   appId: '1:463457247371:web:c96b8873931e085418348e',
//   measurementId: "G-8MEDNC9443"
// };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );
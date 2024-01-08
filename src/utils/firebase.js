// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC8JBdPXhtQTN0Kgcl1qs2vzzz5b9EmXHU',
  authDomain: 'netflixgpt-a8bec.firebaseapp.com',
  projectId: 'netflixgpt-a8bec',
  storageBucket: 'netflixgpt-a8bec.appspot.com',
  messagingSenderId: '397469733132',
  appId: '1:397469733132:web:93886eb929b4b540763929',
  measurementId: 'G-N82Z38F7JK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

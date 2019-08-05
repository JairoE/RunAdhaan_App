import Firebase from 'firebase';
import { secrets } from './llaves.js';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: secrets.FIRE_BASE,
  authDomain: "runadhaan-test.firebaseapp.com",
  databaseURL: "https://runadhaan-test.firebaseio.com",
  projectId: "runadhaan-test",
  storageBucket: "runadhaan-test.appspot.com",
  messagingSenderId: "909319606644",
  appId: "1:909319606644:web:06ac772a3266e2e4"
};
// Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig);

export const db = app.database();
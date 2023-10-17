import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    // Your web app's Firebase configuration
    apiKey: "AIzaSyA036IoQpQycbZHbz6tlErzPXBn6xc56Vg",
    authDomain: "my-doctor-59729.firebaseapp.com",
    projectId: "my-doctor-59729",
    storageBucket: "my-doctor-59729.appspot.com",
    messagingSenderId: "105271330230",
    appId: "1:105271330230:web:515329b7889539cf18ad17"
});

const Firebase = firebase;
export default Firebase;
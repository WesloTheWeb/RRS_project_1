import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const FIREBASE_KEY = `AIzaSyDNxcDBsqvf-EwWMHC6rMhuv0Ndg73dRyI`;
const FIREBASE_CONFIG = {
    apiKey: FIREBASE_KEY,
    authDomain: "shella-fresh-db.firebaseapp.com",
    projectId: "shella-fresh-db",
    storageBucket: "shella-fresh-db.appspot.com",
    messagingSenderId: "677672663082",
    appId: "1:677672663082:web:a687ec59372bee8834ab53",
    measurementId: "G-Q6N9LY56TN"
};

firebase.initializeApp(FIREBASE_CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
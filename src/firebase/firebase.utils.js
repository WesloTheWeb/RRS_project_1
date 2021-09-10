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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) 
    return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        // check if any data in place, if isn't will create iot.
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            });
        } catch (error) {
            console.log(`error creating user `, error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(FIREBASE_CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCe9TewntNy_RpAuH4ByV4UtxR66QsbkmQ",
    authDomain: "clothing-ecommerce-db-1019d.firebaseapp.com",
    projectId: "clothing-ecommerce-db-1019d",
    storageBucket: "clothing-ecommerce-db-1019d.appspot.com",
    messagingSenderId: "175670935657",
    appId: "1:175670935657:web:49d7a4f2601b16a01722f8",
    measurementId: "G-8HNF9C0M29"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
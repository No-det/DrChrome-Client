import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCROdCe-uqkn0A2Vr3frh5TkGoFSHnkNN4",
  authDomain: "drchrome.firebaseapp.com",
  projectId: "drchrome",
  storageBucket: "drchrome.appspot.com",
  messagingSenderId: "309765966032",
  appId: "1:309765966032:web:fb904d2c8f7fca95e076d5",
});

export const auth = firebase.auth();

export default firebase;

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAy3ErJd6wJWUHMlSK75V8kE4zHkyTp7ec",
    authDomain: "slack-clone-41391.firebaseapp.com",
    projectId: "slack-clone-41391",
    storageBucket: "slack-clone-41391.appspot.com",
    messagingSenderId: "325216520641",
    appId: "1:325216520641:web:521e9c06e076ba1b520740",
    measurementId: "G-13BHLZVSTW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;
  
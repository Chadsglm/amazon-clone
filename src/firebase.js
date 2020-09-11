import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcLQRLttS3ZYkpn6AwYC9sBxycp1hK1S8",
  authDomain: "chad--clone.firebaseapp.com",
  databaseURL: "https://chad--clone.firebaseio.com",
  projectId: "chad--clone",
  storageBucket: "chad--clone.appspot.com",
  messagingSenderId: "886940396819",
  appId: "1:886940396819:web:ba3517500dff3497d63ee6",
  measurementId: "G-MLR078MKCH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
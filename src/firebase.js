import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
const config = {
  apiKey: "AIzaSyArWH45m1mCLyy2PJL_mzA1B_e1xaW2oKE",
  authDomain: "m-city-3f6e2.firebaseapp.com",
  databaseURL: "https://m-city-3f6e2.firebaseio.com",
  projectId: "m-city-3f6e2",
  storageBucket: "m-city-3f6e2.appspot.com",
  messagingSenderId: "546826408859",
  appId: "1:546826408859:web:20893770da36376003c73e",
  measurementId: "G-Z6MT3ZX4LH"
};
firebase.initializeApp(config);
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");
export {
  firebase,
  firebaseDB,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers
};

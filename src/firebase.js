import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
const config = {
  apiKey: process.env.API.KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://m-city-3f6e2.firebaseio.com",
  projectId: "m-city-3f6e2",
  storageBucket: "m-city-3f6e2.appspot.com",
  messagingSenderId: "546826408859",
  appId: process.env.APP_ID,
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

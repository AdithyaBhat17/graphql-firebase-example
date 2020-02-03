require("dotenv").config();
import admin from "firebase-admin";
import firebase from "firebase";

const serviceAccount = require("../graphql-e7610-firebase-adminsdk-s8wzt-7bb2a7c203.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL
});

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  appId: process.env.appId
};

let client = firebase.initializeApp(firebaseConfig);

export { admin, client };

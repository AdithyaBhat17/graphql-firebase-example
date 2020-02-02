import admin from 'firebase-admin';

let serviceAccount = require('../graphql-e7610-firebase-adminsdk-s8wzt-7bb2a7c203.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://graphql-e7610.firebaseio.com',
});

export default admin;

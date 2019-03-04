const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');
const cors = require('cors');
const axios = require('axios');
const secrets = require('./functionSecrets');
firebase.initializeApp(secrets.firebaseConfig);

exports.signup = functions.https.onRequest((req, res) => {
  
  // cors(req, res, () => {
    res.send({
      "body": req.body
    });
  // });
});
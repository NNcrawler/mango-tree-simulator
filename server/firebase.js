const firebase = require('@firebase/app').default;
const admin = require("firebase-admin");
const serviceAccount = require("./mango-tree-d3584-firebase-adminsdk-mo5fl-78a7f90f48.json");
require('@firebase/auth');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var firebaseConfig = {
  apiKey: "AIzaSyC5aukYpsyD9a8rJHiiOMbFTC6c_Hywnzk",
  authDomain: "one-slide.firebaseapp.com",
  databaseURL: "https://one-slide.firebaseio.com",
  projectId: "one-slide",
  storageBucket: "one-slide.appspot.com",
  messagingSenderId: "239403079840"
};
firebase.initializeApp(firebaseConfig);

module.exports = {
  firebase,
  db
};

const firebase = require('./firebase');

const db = firebase.db;

module.exports = class updater {
  static createNewTree(data) {
    db.collection('tree').doc('mango').set(data)
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  static updateTree(data) {
    db.collection('tree').doc('mango').update(data)
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    })
  };
  static initialTreeLog() {
    let data = {
      lifeTimeHarvested: 0,
      lifeTimeDeadTrees: 0,
    };
    db.collection('log').doc('mango').get()
    .then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
        db.collection('log').doc('mango').set(data)
        .then((value) => {
          console.log(value);
        })
        .catch((err) => {
          console.log(err);
        })
      }
    })
    .catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  static updateLog(data) {
    db.collection('log').doc('mango').update(data)
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    })
  }
};

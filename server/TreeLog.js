const firebase = require('./firebase');
const dataUpdater = require('./dataUpdater');

const db = firebase.db;

class TreeLog {
  constructor() {
    // db.collection('log').doc('mango').get()
    // .then((value) => {
    //   if (doc.exists) {
    //      console.log("Document data:", doc.data());
    //      this.lifeTimeHarvested = doc.data().harvested;
    //      this.harvested = doc.data().lifeTimeHarvested;
    //      this.lifeTimeDeadTrees = parseInt( doc.data().lifeTimeDeadTrees);
    //  } else {
    //      console.log("No such document!");
    //  }
    // })
    // .catch((err) => {
    //
    // })
    this.lifeTimeHarvested = 0
    this.lifeTimeDeadTrees = 0
  }

  addHarvest(num) {
    this.lifeTimeHarvested += num;
    dataUpdater.updateLog({
      lifeTimeHarvested: this.lifeTimeHarvested,
    });
  }

  addDeadTree() {
    console.log(this, '00000000000012-30912-309');
    this.lifeTimeDeadTrees += 1;
    dataUpdater.updateLog({lifeTimeDeadTrees: this.lifeTimeDeadTrees});
  }

  reset() {
    this.harvested = 0;
  }
}

module.exports = TreeLog;

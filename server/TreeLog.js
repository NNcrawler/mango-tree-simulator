class TreeLog {
  constructor() {
    this.lifeTimeHarvested = 0;
    this.harvested = 0;
    this.lifeTimeDeadTrees = 0;
  }

  addHarvest(num) {
    this.lifeTimeHarvested += num;
    this.harvested += num;
  }

  addDeadTree() {
    this.lifeTimeDeadTrees += 1;
  }

  reset() {
    this.harvested = 0;
  }
}

module.exports = TreeLog;

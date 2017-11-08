const express = require('express');
const app = express();
const MangoTree = require('./MangoTree');
const TreeLog = require('./TreeLog');
const cors = require('cors');
var CronJob = require('node-cron');
const dataUpdater = require('./dataUpdater');

dataUpdater.initialTreeLog();

let mangoTree = new MangoTree();
const treeLog = new TreeLog();
app.use(cors());

var task = CronJob.schedule('*/5 * * * *', function() {
  mangoTree.grow();
  if( mangoTree.isAlive == false ) {
    mangoTree = new MangoTree();
    treeLog.reset()
    treeLog.addDeadTree()
  }
  console.log('1 Month has passed');
}, false);

task.start()

app.get('/', function (req, res) {
  let data = {
    height : mangoTree.height,
    age : mangoTree.age,
    fruits : mangoTree.fruits.length,
    lifeTimeHarvested : treeLog.lifeTimeHarvested,
    harvested : treeLog.harvested,
    lifeTimeDeadTrees: treeLog.lifeTimeDeadTrees,
  };
  res.status(200).send(data)
});

app.get('/harvest', function (req, res){
  let fruitsHarvested = mangoTree.harvest();
  treeLog.addHarvest(fruitsHarvested);
  res.send({ fruitsHarvested })
  // dataUpdater.updateLog({lifeTimeHarvested: treeLog.lifeTimeHarvested})
})

app.listen(3000);

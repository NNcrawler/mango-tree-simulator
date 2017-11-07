class Fruit {
  constructor() {
    this.isGood = Math.round(Math.random()) == 1 ? true : false;
  }
}

class MangoTree {
  constructor() {
    this.height = 20;
    this.age = 0;
    this.fruits = [];
    this.productiveAge = 12;
    this.maxFruit = 30;
    this.isFruitMax = false;
    this.maxAge = 80;
    this.isAlive = true;
  }

  grow() {
    let growth = Math.round(Math.random() * 20);
    this.height += growth;
    this.age += 1;
    if (this.age > this.productiveAge) {
      this.fruitGloom();
    }
    if (this.age > this.maxAge) {
      this.isAlive = false;
    }
  }

  fruitGloom() {
    let numberOfFruits = Math.round(Math.random() * 20);
    if (this.fruits.length < this.maxFruit){
      for (var i = 0; i < numberOfFruits; i++) {
        this.fruits.push(new Fruit());
      }
    } else {
      this.isFruitMax = true;
    }
  }

  harvest() {
    let goodFruit = this.fruits.reduce((p, c) => {return c.isGood ? p+1 : p}, 0);
    this.fruits = [];
    return goodFruit;
  }
}

module.exports = MangoTree;

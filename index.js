function produceDrivingRange() {
  let number = 0;
  
  // returns a function that will take two strings as arguments and returns a message
  return function(stringOne, stringTwo) {
    return 
  }
}

function createItem() {
  let ItemId = 0;
  // return the class
  return class {
    constructor(name, manufacturePrice) {
      this.name = name;
      this.manufacturePrice = manufacturePrice;
      this.id = ++ItemId;
    }
 
    retailPrice(marketMultiplier) {
      return marketMultiplier * this.manufacturePrice;
    }
  };
}
 function retailPriceMaker(manufacturePrice) {
  return function(marketMultiplier) {
    return marketMultiplier * manufacturePrice;
  };
}
 
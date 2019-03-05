function produceDrivingRange(range) {
  // returns a function that will take two strings as arguments and returns a message
  return function(stringOne, stringTwo) {
    let stringReturn = "";
    if (range >= 7) {
      stringReturn = "8 blocks out of range";
    } else {
      stringReturn = "within range by 7";
    }
  };
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
 
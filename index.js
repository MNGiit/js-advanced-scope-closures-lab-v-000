function produceDrivingRange(range) {
  // returns a function that will take two strings as arguments and returns a message
  return function(stringOne, stringTwo) {
    let stringReturn = "";
    let numOne = parseInt(stringOne);
    let numTwo = parseInt(stringTwo);
    let blocks = numTwo - numOne;
    
    if (range < blocks) {
      stringReturn = `${blocks - range} blocks out of range`;
    } else {
      stringReturn = `within range by ${range - blocks}`;
    }
    
    return stringReturn;
  };
  
}

function produceTipCalculator(fare) {
  // returns a function
  return function(tip) {
    return fare * tip;
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
 
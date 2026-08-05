const maxProfit = (profit) => {
  let minimumPrice = Infinity;
  let HighProfit = 0;

  for (let i = 0; i < profit.length; i++) {
    let currentRate = profit[i];
    if (currentRate < minimumPrice) {
      minimumPrice = currentRate;
    } else {
      let totalProfit = currentRate - minimumPrice;
      if (totalProfit > HighProfit) {
        HighProfit = totalProfit;
      }
    }
  }
  return HighProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5

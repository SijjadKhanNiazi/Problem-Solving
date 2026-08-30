const maxArray = (arr) => {
  let currentSum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

console.log(maxArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

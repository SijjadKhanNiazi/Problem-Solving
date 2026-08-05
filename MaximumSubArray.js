const maxArr = (arr) => {
  let maxSum = arr[0];
  let current = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (current + arr[i] > arr[i]) {
      current = current + arr[i];
    } else {
      current = arr[i];
    }

    if (current > maxSum) {
      maxSum = current;
    }
  }
  return maxSum;
};
console.log(maxArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

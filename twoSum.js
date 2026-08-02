const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    if (arr.includes(difference) && arr.indexOf(difference) != i) {
      return [i, arr.indexOf(difference)];
    }
  }
};

console.log(twoSum([1, 2, 3, 4, 56, 2], 57));

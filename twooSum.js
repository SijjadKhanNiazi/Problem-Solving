const twoSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === target) {
      return [left, right];
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(twoSum([1, 2, 3, 4, 6], 6));

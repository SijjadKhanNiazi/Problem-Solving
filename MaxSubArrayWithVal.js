const MinlengthArray = (arr, k) => {
  let windowSum = 0;
  let left = 0;
  let minCount = Infinity;
  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    while (windowSum >= k) {
      let currentCount = right - left + 1;
      minCount = Math.min(currentCount, minCount);

      windowSum -= arr[left];
      left++;
    }
  }
  return minCount;
};

console.log(MinlengthArray([2, 3, 1, 2, 4, 3], 7));

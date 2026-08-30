const threesum = (arr, k) => {
  let max = 0;

  for (let i = 0; i < k; i++) {
    max += arr[i];
  }
  let maxsum = max;

  for (let i = k; i < arr.length; i++) {
    max += arr[i];
    max -= arr[i - k];
    maxsum = Math.max(maxsum, max);
  }

  return maxsum;
};

console.log(threesum([1, 4, 2, 10, 2, 3, 1], 3));

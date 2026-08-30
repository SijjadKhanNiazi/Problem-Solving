const checker = (arr) => {
  maxValue = -Infinity;
  maxKey = null;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = map.get(arr[i]) || 0;
    map.set(arr[i], currentValue + 1);
  }

  for (let [key, value] of map) {
    [maxValue, maxKey] = value > maxValue ? [value, key] : [maxValue, maxKey];
  }
  return maxKey;
};

console.log(checker([1, 2, 3, 4, 5, 4, 5, 5]));

const BSort = (arr, target) => {
  const sorted = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sorted[mid] === target) return [sorted, mid];
    if (sorted[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

console.log(BSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));

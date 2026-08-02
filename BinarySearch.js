const Search = (n, target) => {
  let num = n.sort((a, b) => a - b);
  console.log(num);
  let left = 0;
  let right = num.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (num[mid] === target) return mid;
    if (target > num[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(Search([1, 2, 3, 4, 5, 6, 54, 3, 2, 1], 5));

const bbsort = (arr) => {
  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bbsort([2, 1, 4, 5, 6, 7, 8, 9, 3]));

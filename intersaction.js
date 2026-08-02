const inter = (arr1, arr2) => {
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      common.push(arr1[i]);
    }
  }
  return common;
};

console.log(inter([1, 2, 3, 4, 5, 6, 7], [1, 3, 5, 7]));

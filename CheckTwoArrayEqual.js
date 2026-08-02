const Check = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
      break;
    }
  }
  return true;
};

console.log(Check([1, 3, 2, 4], [1, 3, 2, 4]));

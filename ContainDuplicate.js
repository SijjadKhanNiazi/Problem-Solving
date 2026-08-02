const checkDuplicate = (arr) => {
  const obj = {};
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  return obj;
};

console.log(checkDuplicate([1, 2, 1, 2, 3, 4, 2]));

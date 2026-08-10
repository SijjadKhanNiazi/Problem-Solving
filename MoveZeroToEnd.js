const move = (arr) => {
  let NonZeros = arr.filter((n) => n !== 0);
  let Zeros = arr.filter((n) => n === 0);
  return [...NonZeros, ...Zeros];
};

console.log(move([1, 0, 2, 0, 3, 0, 4, 0]));
/*
///way 22
const move = (arr) => {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      ans.push(arr[i]);
    } else {
      ans.unshift(arr[i]);
    }
  }
  return ans;
};

console.log(move([1, 0, 2, 0, 3, 0, 4, 0]));

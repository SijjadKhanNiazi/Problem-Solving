const move = (arr) => {
  let NonZeros = arr.filter((n) => n !== 0);
  let Zeros = arr.filter((n) => n === 0);
  return [...NonZeros, ...Zeros];
};

console.log(move([1, 0, 2, 0, 3, 0, 4, 0]));

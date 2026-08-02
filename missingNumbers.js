const miss = (arr) => {
  const n = arr.length + 1;
  const expected = (n * (n + 1)) / 2;
  const actual = arr.reduce((a, b) => a + b, 0);
  return expected - actual;
};

console.log(miss([1, 2, 3, 4, 6]));

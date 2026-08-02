const FindNumber = (arr) => {
  const sorted = [...new Set(arr)].sort((a, b) => b - a);
  return sorted[1];
};

console.log(FindNumber([1, 2, 3, 4, 3, 2, 7, 8, 9, 100]));

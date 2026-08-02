const frequent = (arr) => {
  let map = {};
  for (let i of arr) {
    map[i] = (map[i] || 0) + 1;
  }
  console.log(map[i]);
};

console.log(frequent([1, 2, 1, 2, 2, 2, 1, 4, 4, 5, 5, 6]));

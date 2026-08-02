const removeDuplicate = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicate(["a", "c", "b", "f", "e", "a", "b", "d"]).sort());

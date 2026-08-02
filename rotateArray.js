function rotate(arr, k) {
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotate([1, 2, 3, 4, 5, 6], 3));

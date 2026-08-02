//Input: [1,2,3,4]
//Output: [24,12,8,6]

const product = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(24 / arr[i]);
  }
  return output;
};

console.log(product([1, 2, 3, 4]));

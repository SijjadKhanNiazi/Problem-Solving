const product = (arr) => {
  let n = arr.length;
  let prefix = [n];
  prefix[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] * arr[i - 1];
  }
  console.log(prefix);

  let sufix = [];
  sufix[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    sufix[i] = sufix[i + 1] * arr[i + 1];
  }
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = prefix[i] * sufix[i];
  }

  return answer;
};

console.log(product([1, 2, 3, 4]));

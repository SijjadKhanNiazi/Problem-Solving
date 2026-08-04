const checkAccurance = (arr) => {
  const data = {};
  for (let i of arr) {
    data[i] = (data[i] || 0) + 1;
  }
  console.log(data);
};

checkAccurance([1, 2, 3, 3, 4]);

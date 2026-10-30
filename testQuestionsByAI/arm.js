const armChecker = (num) => {
  let number = String(num).split("");
  let length = number.length;

  let sum = number.reduce((a, b) => a + Math.pow(Number(b), length), 0);
  return num === sum;
};

console.log(armChecker(153));

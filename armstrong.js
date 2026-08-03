/*const armstrong = (number) => {
  let arr = [];
  const numberActual = number;
  while (number) {
    let lastDigit = number % 10;
    arr.unshift(lastDigit);
    number = Math.floor(number / 10);
  }
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    arr[i] = Math.pow(arr[i], length);
  }
  return numberActual === arr.reduce((a, b) => a + b);
};

console.log(armstrong(123));
*/

const isArmstrong = (num) => {
  const digits = String(num).split("");
  const length = digits.length;

  let sum = digits.reduce((a, b) => a + Math.pow(Number(b), length), 0);
  return sum === num;
};

const range = (end) => {
  const armArray = [];
  for (let i = 1; i <= end; i++) {
    if (isArmstrong(i)) {
      armArray.push(i);
    }
  }
  console.log(armArray);
};

range(1000);

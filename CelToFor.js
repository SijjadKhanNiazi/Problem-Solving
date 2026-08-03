const converterC = (celcius) => {
  return Math.round(celcius * (9 / 5) + 32);
};
const converterF = (Foregin) => {
  return Math.round((Foregin - 32) * (5 / 9));
};

console.log(converterC(50));
console.log(converterC(122));

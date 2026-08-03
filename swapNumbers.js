const swap = (a, b) => {
  [a, b] = [b, a];
  return `a = ${a} and b = ${b}`;

  a += b; //2+4=6 a =6
  b = a - b; // 6-4 = 2
  a -= b; // 6-2 = 4
  return `a = ${a} and b = ${b}`;
};

console.log(swap(2, 4));

/*const fib = (n) => {
  if (n <= 1) return ;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(7));
*/

function fib(n) {
  let a = 0;
  let b = 1;

  for (let i = 1; i <= n; i++) {
    var temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}
console.log(fib(7));

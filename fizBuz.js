/*const fizbux = (number) => {
  if (number < 1) throw new Error("range should be more than 1");
  for (let i = 0; i <= number; i++) {
    if (i === 0) console.log(i);
    else if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzzBuzzz");
    } else if (i % 3 == 0) {
      console.log("fizzz");
    } else if (i % 5 == 0) {
      console.log("Buzzz");
    } else {
      console.log(i);
    }
  }
};

fizbux(50);
*/

const fizbux = (number) => {
  if (number < 1) throw new Error("range should be more than 1");
  for (let i = 0; i <= number; i++) {
    const output =
      i == 0
        ? i
        : i % 3 === 0 && i % 5 === 0
          ? "fizbuzz"
          : i % 3 == 0
            ? "fizz"
            : i % 5 == 0
              ? "Buzz"
              : i;
    console.log(output);
  }
};

fizbux(50);

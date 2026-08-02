/*const Cap = (str) => {
  const arr_word = str.split(" ");
  arr_word[0] = arr_word[0].toUpperCase();
  return arr_word;
};

console.log(Cap("i love javaScript"));

*/

const Cap = (str) => {
  const words_arr = str.split("");
  words_arr[0] = words_arr[0].toUpperCase();

  return words_arr.join("");
};

console.log(Cap("i love javaScript"));

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("i love javascript"));

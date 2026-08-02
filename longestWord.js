const longWordFinder = (str) => {
  let longestWord = "";
  let words = str.split(" ");
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(longWordFinder("i loveeeee mangose"));

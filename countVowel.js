const countVowel = (str) => {
  let count = 0;
  let vowel = "aeiouAEIOU";
  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(countVowel("hello World"));

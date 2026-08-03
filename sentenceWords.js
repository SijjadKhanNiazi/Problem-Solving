const wordscount = (str) => {
  if (typeof str !== "string") throw new Error("input should be a string");
  return str.split(" ").length;
};

console.log(wordscount("1234"));

const validangaram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  str1 = str1
    .split("")
    .sort((a, b) => a - b)
    .join("");
  str2 = str2
    .split("")
    .sort((a, b) => a - b)
    .join("");
  return str1 === str2;
};

console.log(validangaram("ssijad", "sijjad"));

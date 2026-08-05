const valid = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else {
      let previous = stack.pop();

      if (previous === ")" && str[i] !== "(") return false;
      if (previous === "}" && str[i] !== "{") return false;
      if (previous === "]" && str[i] !== "[") return false;
    }
  }
  return stack.length === 0;
};
console.log(valid("({{}})"));

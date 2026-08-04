const paramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let lineContent = "";
    for (let space = 1; space <= rows - i; space++) {
      lineContent = lineContent + " ";
    }

    for (let count = 1; count <= i; count++) {
      lineContent += count;
    }
    for (let reverse = i - 1; reverse >= 1; reverse--) {
      lineContent += reverse;
    }

    console.log(lineContent);
  }
};
paramid(5);

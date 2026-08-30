class Tree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let t1 = new Tree(10);
t1.left = new Tree(5);
t1.right = new Tree(15);
t1.left.left = new Tree(3);
t1.left.right = new Tree(7);

const BFS = (root) => {
  if (root === null) {
    return;
  }

  let arr = [root];
  while (arr.length > 0) {
    let current = arr.shift();
    console.log(current.value);

    if (current.left !== null) {
      arr.push(current.left);
    }
    if (current.right !== null) {
      arr.push(current.right);
    }
  }
};

BFS(t1);

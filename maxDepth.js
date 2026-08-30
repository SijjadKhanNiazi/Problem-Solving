class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let t1 = new TreeNode(10);
t1.left = new TreeNode(5);
t1.right = new TreeNode(15);
t1.left.left = new TreeNode(3);
t1.left.right = new TreeNode(7);

const depth = (tree) => {
  if (tree === null) {
    return 0;
  }

  let left = depth(tree.left);
  let right = depth(tree.right);

  return Math.max(left, right) + 1;
};

console.log(depth(t1));

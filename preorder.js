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

// const preorder = (root) => {
//   if (root === null) {
//     return;
//   }

//   console.log(root.value);

//   preorder(root.left);
//   preorder(root.right);
// };

// preorder(t1);

//inorder
// const inOrder = (root) => {
//   if (root === null) {
//     return;
//   }

//   inOrder(root.left);
//   console.log(root.value);
//   inOrder(root.right);
// };

// inOrder(t1);

//postorder

const postorder = (root) => {
  if (root === null) {
    return;
  }

  postorder(root.left);
  postorder(root.right);
  console.log(root.value);
};

postorder(t1);

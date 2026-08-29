class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const l1 = new Node(10);
const l2 = new Node(20);
const l3 = new Node(30);
const l4 = new Node(40);
let head = l1;

l1.next = l2;
l2.next = l3;
l3.next = l4;

const deleter = (head, target) => {
  if (head === null) return null;
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.next.val === target && current.next.next !== null) {
      current.next = current.next.next;
      return head;
    }

    current = current.next;
  }

  return head;
};

const tranverser = (head) => {
  let curr = head;
  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
};

let data = deleter(head, 30);
tranverser(data);

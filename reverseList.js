class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
const node4 = new Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let head = node1;

const reverse = (head) => {
  let current = head;
  let previous = null;
  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

const traverser = (head) => {
  let curr = head;

  while (curr !== null) {
    console.log(curr.value);
    curr = curr.next;
  }
};

const newHead = reverse(head);

traverser(newHead);

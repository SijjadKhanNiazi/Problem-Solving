class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
//list 1
const l1 = new Node(1);
const n2 = new Node(4);
const n3 = new Node(5);

l1.next = n2;
n2.next = n3;

// list2

const l2 = new Node(1);
const b2 = new Node(3);
const b3 = new Node(4);

l2.next = b2;
b2.next = b3;

// l1       1->4->5
// l2       1->3->4

const merge = (l1, l2) => {
  let current = new Node(0);
  let dummy = current;
  while (l1 !== null && l2 !== null) {
    if (l1.value <= l2.value) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }

    dummy = dummy.next;
  }

  if (l1 === null) {
    dummy.next = l2;
  } else {
    dummy.next = l1;
  }

  return current.next;
};
const tranverser = (head) => {
  let curr = head;
  while (curr !== null) {
    console.log(curr.value);
    curr = curr.next;
  }
};

tranverser(merge(l1, l2));

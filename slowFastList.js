class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const L1 = new Node(1);
L1.next = new Node(2);
L1.next.next = new Node(3);
L1.next.next.next = new Node(4);
L1.next.next.next.next = L1.next;

const traverser = (L1) => {
  let slow = L1;
  let fast = L1;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

console.log(traverser(L1));

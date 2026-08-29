class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

//list 1
const l1 = new Node(1);
l1.next = new Node(4);
l1.next.next = new Node(5);

//list 2

const l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(4);

//list 2

const l3 = new Node(2);
l3.next = new Node(6);

const merge = (l1, l2) => {
  const dummy = new Node(0);
  let current = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.value <= l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l2 !== null) {
    current.next = l2;
  } else {
    current.next = l1;
  }

  return dummy.next;
};

const traverse = (list) => {
  let current = list;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const mergeKsort = (arr) => {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = merge(result, arr[i]);
  }
  return result;
};

traverse(mergeKsort([l1, l2, l3]));

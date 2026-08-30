// const selectionSort = (arr) => {
//   let minimun = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       minimun = Math.min(minimun, arr[j]);
//     }
//     previous = arr.indexOf(minimun);
//     [arr[i], arr[previous]] = [arr[previous], arr[i]];
//     minimun = Infinity;
//   }

//   return arr;
// };

//console.log(selectionSort([1, 2, 8, 5, 3]));

// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       let indexOfj = j;
//       if (arr[j] < arr[i]) {
//         minIndex = j;
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
//   return arr;
// };

// console.log(selectionSort([1, 2, 8, 5, 3]));

const selectionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(selectionSort([5, 3, 8, 1, 2]));

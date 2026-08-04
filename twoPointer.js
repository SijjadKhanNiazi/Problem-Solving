/*const twopointer = (arr, sum) => {
  for (let num = 0; num <= arr.length; num++) {
    let target = sum - arr[num];
    let targetIndex = arr.indexOf(target);
    if (arr.includes(target)) {
      console.log([num, targetIndex]);
      break;
    }
  }
};

twopointer([1, 2, 3, 4, 5], 5);
*/

const twoSum = (arr, target) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.has(complement)) {
      console.log([map.get(complement), i]);
      break;
    }

    map.set(arr[i], i);
  }
};
twoSum([1, 3, 5, 7, 9], 12);

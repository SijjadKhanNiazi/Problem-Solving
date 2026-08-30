const groupAnagrams = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].split("").sort().join("");
    if (!map.get(currentValue)) {
      map.set(currentValue, [arr[i]]);
    } else {
      //   let oldArray = map.get(currentValue);
      //   map.set(currentValue, [...oldArray, arr[i]]);
      map.get(currentValue).push(arr[i]);
    }
  }
  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

function reverseArrayInPlace(arr) {
  for (let i=0; i<arr.length / 2; i++) {
    var temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

const originalArr = [1,2,3,4,5,6,7];
const reversedArray = reverseArrayInPlace([...originalArr]);

console.log({
  originalArr,
  reversedArray,
});

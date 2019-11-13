function binarySearch(numberArr, search) {
  numberArr.sort((a,b) => a - b);

  const middleIndex = Math.floor(numberArr.length / 2);
  const middleValue = numberArr[middleIndex];

  if (middleValue === search) {
    return true;
  } else if (search > middleValue && numberArr.length > 1) {
    return binarySearch(numberArr.slice(middleIndex), search);
  } else if (search < middleValue && numberArr.length > 1) {
    return binarySearch(numberArr.slice(0, middleIndex), search);
  } else {
    return false;
  }
}

const numbers = [4,5,6,3,9,1,2,7,8,10,15,11,13,12,14];
const search = 2;

console.log({
  numbers: [...numbers],
  search,
  exists: binarySearch(numbers, search),
});

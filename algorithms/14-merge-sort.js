function mergeSort(data) {
  const dataLength = data.length;

  if (dataLength < 2) {
    return data;
  }

  const middleIndex = Math.floor(dataLength/2);
  const firstHalf = mergeSort(data.slice(0, middleIndex));
  const secondHalf = mergeSort(data.slice(middleIndex));

  return merge(firstHalf, secondHalf);
}

function merge(firstArr, secondArr) {
  const mergedArr = [];

  while(firstArr.length && secondArr.length) {
    if (firstArr[0] <= secondArr[0]) {
      mergedArr.push(firstArr.shift());
    } else {
      mergedArr.push(secondArr.shift());
    }
  }

  if(firstArr.length) {
    mergedArr.push(...firstArr);
  }

  if(secondArr.length) {
    mergedArr.push(...secondArr);
  }

  return mergedArr;
}

const variables = [100, 20, 12, 50, 75, -4, 27, 190, 80, 500, -4, -70, 0, 4, 15];

console.log(mergeSort(variables));

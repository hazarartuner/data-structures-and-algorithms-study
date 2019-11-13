function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

function getMean(arr) {
  const sum = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  return sum / arr.length;
}

function getMedian(arr) {
  // sort array
  arr.sort((a,b) => a - b);

  if (arr.length % 2 === 1) {
    return arr[(arr.length - 1) / 2];
  } else {
    const secondIndex = arr.length / 2;
    const firstIndex = secondIndex - 1;

    return (arr[firstIndex] + arr[secondIndex]) / 2;
  }
}

function getMode(arr) {

}

console.log(meanMedianMode([15,4,22,2,7,3,12,5,9]));

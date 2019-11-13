function twoSum(numArr, sum) {
  const numObj = {};

  return numArr.reduce((acc, num) => {
    const requiredNum = sum - num;

    if (numObj[requiredNum]) {
      acc.push([num, requiredNum]);
    }
    numObj[num] = true;

    return acc;
  }, []);
}

console.log({
  pairs: twoSum([1, 6, 4, 5, 3, 3], 7),
});

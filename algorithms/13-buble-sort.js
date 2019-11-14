function bubbleSort(values) {
  for (let i=values.length; i > 0; i--) {
    for (let j=0; j<i; j++) {
      if (values[j] > values[j + 1]) {
        const temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
    }
  }

  return values;
}

const values = [6,3,8,12,95,36,21,3,7,1,99,34,2];

console.log({
  values: [...values],
  sortedValues: bubbleSort(values),
});

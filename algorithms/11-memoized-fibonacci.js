function memoizedFibonacci(position, cache = {}) {
  if (cache[position]) {
    return cache[position];
  } else if (position <= 2) {
    return 1;
  } else {
    cache[position] = memoizedFibonacci(position - 1, cache) + memoizedFibonacci(position - 2, cache);
  }

  return cache[position];
}

const position = 9;

console.log({
  position,
  fibonacciValue: memoizedFibonacci(position),
});

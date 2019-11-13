function fibonacci(position) {
  if (position <= 2) {
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci( position - 2);
  }
}

const position = 9;

console.log({
  position,
  fibonacciValue: fibonacci(position),
});

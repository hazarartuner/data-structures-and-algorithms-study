function fizzBuzz(num) {
  for (let i=1; i<=num; i++) {
    let log = i;

    if (i % 15 === 0) {
      log = 'FizzBuzz';
    } else if (i%3 === 0) {
      log = 'Fizz';
    } else if (i%5 === 0) {
      log = 'Buzz';
    }

    console.log(log);
  }
}

fizzBuzz(50);
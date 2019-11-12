function palindrome(text) {
  const validCharacterArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const normalizedTextArr = text
    .split('')
    .reduce((acc, curr) => {
      if (validCharacterArr.indexOf(curr) >= 0) {
        acc.push(curr);
      }

      return acc;
      },
      []
    );

  return normalizedTextArr.join() === normalizedTextArr.reverse().join();
}

const isPalindrome = palindrome('level');

console.log({
  isPalindrome
});
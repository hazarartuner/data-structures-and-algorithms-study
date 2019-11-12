function reverseWords(text) {
  const wordsArr = text.split(' ');

  return wordsArr.map(word =>
    word.split('').map((character, index) =>
      word[word.length - 1 - index]
    ).join('')
  ).join(' ')
}

const originalText = 'this is a beautiful day';
const reversedText = reverseWords(originalText);

console.log({
  originalText,
  reversedText
});

function caesarCipher(text, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLength = alphabet.length;

  return text.split('')
    .map(character => {
      const alphabetIndex = alphabet.indexOf(character);

      if (alphabetIndex >= 0) {
        let newIndex = (alphabetIndex + num) % alphabetLength;

        if (newIndex < 0) {
          newIndex = alphabetLength + newIndex;
        }

        return alphabet[newIndex];
      }

      return character;
    }, [])
    .join('');
}

const originalText = 'abc';
const cipherText = caesarCipher(originalText, -28);

console.log({
  originalText,
  cipherText
});

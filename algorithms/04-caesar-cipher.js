function caesarCipher(text, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLength = alphabet.length;

  return text.split('')
    .map(character => {
      const isUppercase = character === character.toUpperCase();
      const alphabetIndex = alphabet.indexOf(isUppercase ? character.toLowerCase() : character);

      if (alphabetIndex >= 0) {
        let newIndex = (alphabetIndex + num) % alphabetLength;

        if (newIndex < 0) {
          newIndex = alphabetLength + newIndex;
        }

        return isUppercase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
      }

      return character;
    }, [])
    .join('');
}

const originalText = 'abcD';
const cipherText = caesarCipher(originalText, -28);

console.log({
  originalText,
  cipherText
});

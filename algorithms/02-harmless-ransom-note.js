function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(' ');
  const magazineArr = magazineText.split(' ');
  const magazineWordObj = {};
  let isMatched = true;

  magazineArr.forEach(word => {
    const wordLower = word.toLowerCase();

    if (!magazineWordObj[wordLower]) {
      magazineWordObj[wordLower] = 1;
    } else {
      magazineWordObj[wordLower]++;
    }
  });

  noteArr.forEach((word) => {
    const wordLower = word.toLowerCase();

    if (magazineWordObj[wordLower] > 0) {
      magazineWordObj[wordLower]--;
    } else {
      isMatched = false;
    }
  });

  return isMatched;
}

const isMatched = harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

console.log({ isMatched });
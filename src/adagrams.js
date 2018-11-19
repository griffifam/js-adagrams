const pool = {
  "A": 9,
  "B": 2,
  "C": 2,
  "D": 4,
  "E": 12,
  "F": 2,
  "G": 3,
  "H": 2,
  "I": 9,
  "J": 1,
  "K": 1,
  "L": 4,
  "M": 2,
  "N": 6,
  "O": 8,
  "P": 2,
  "Q": 1,
  "R": 6,
  "S": 4,
  "T": 6,
  "U": 4,
  "V": 2,
  "W": 2,
  "X": 1,
  "Y": 2,
  "Z": 1
};
const scoreChart = {
  "A": 1,
  "B": 3,
  "C": 3,
  "D": 2,
  "E": 1,
  "F": 4,
  "G": 2,
  "H": 4,
  "I": 1,
  "J": 8,
  "K": 5,
  "L": 1,
  "M": 3,
  "N": 1,
  "O": 1,
  "P": 3,
  "Q": 10,
  "R": 1,
  "S": 1,
  "T": 1,
  "U": 1,
  "V": 4,
  "W": 4,
  "X": 8,
  "Y": 4,
  "Z": 10
};

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    let drawnHand = [];
    let poolArray = [];

    for ( let letter in pool ) {
      let count = pool[letter];
      for ( let i = 0; i < count; i += 1 ) {
        poolArray.push( letter );
      }
    }

    for ( let c = 0; c < 10; c += 1 ) {
      let randomLetter = poolArray[ Math.floor( Math.random() * poolArray.length ) ];

      drawnHand.push( `${ randomLetter }` );
      poolArray.pop( `${ randomLetter }` );
    }

    return drawnHand;
  },
  usesAvailableLetters( hand, drawnHand ) {
    const drawnLength = drawnHand.length;
    for ( let i = 0; i < hand.length; i += 1 ) {
      let char = hand.charAt(i);
      for ( let j = 0; j < drawnHand.length; j += 1 ) {
        if ( char == drawnHand[j] ) {
          drawnHand.splice( j, 1 );
          break;
        }
      }
    }
    if ( drawnHand.length == (drawnLength - hand.length) ) {
      return true;
    }
    return false;
  },
  scoreWord( word ) {
    let hand = word.toUpperCase();

    if ( hand == "" || hand == " ") {
      return 0;
    }

    let score = 0;
    if ( hand.length == 7 || hand.length == 8 || hand.length == 9 || hand.length == 10 ) {
      score += 8;
    }

    for ( let i = 0; i < hand.length; i += 1 ) {
      let char = hand.charAt(i);
      if ( scoreChart[char] ) {
        score += scoreChart[char];
      }
    }
    return score;
  },
  highestScoreFrom( all_plays ) {
    let scoreHash = {};
    let highest_value = 0;
    let highest_key = "";

    all_plays.forEach(function( word ) {
      scoreHash[word] = Adagrams.scoreWord( word );
    });

    for( let key in scoreHash ) {
      if (scoreHash[key] > highest_value) {
        highest_value = scoreHash[key];
        highest_key = key;
      }
    }
    return { word: `${highest_key}`, score: Number(`${highest_value}`) };
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;

// Faça uma função que encontre a palavra mais longa de um array

function getLongestWord(words) {
    let longestWord = words[0];
  
    for (let index = 0; index < words.length; index += 1) {
      const currentWord = words[index];
  
      if (longestWord.length < currentWord.length) {
        longestWord = currentWord;
      }
    }
  
    return longestWord;
};


console.log(getLongestWord(['Alberto', 'cazuza', 'Flamengoooooooooo']));
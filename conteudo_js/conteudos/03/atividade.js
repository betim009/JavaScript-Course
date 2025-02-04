// 1. Revertendo a string manualmente
function reverseWord(word) {
    let reversedWord = '';

    for (let index = word.length - 1; index >= 0; index -= 1) {
        reversedWord += word[index];
    }

    return reversedWord;
}

// 2. Verifica se é palindromo
function verifyPalindrome(word) {
    const loweredCaseWord = word.toLowerCase();
    const reversedWord = reverseWord(loweredCaseWord);
    const isPalindrome = loweredCaseWord === reversedWord;

    return isPalindrome;
}


// Com split
// function verifyPalindrome (string) {
//     const reverse = string.split('').reverse().join('');

//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
// };

console.log(reverseWord('cavalo'));
console.log(verifyPalindrome('Arara'));

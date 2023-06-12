// Revertendo a string manualmente
function reverseWord(word) {
    let reversedWord = '';

    for (let index = word.length - 1; index >= 0; index -= 1) {
        reversedWord += word[index];
    }

    return reversedWord;
}

function verifyPalindrome(word) {
    const loweredCaseWord = word.toLowerCase();
    const reversedWord = reverseWord(loweredCaseWord);
    const isPalindrome = loweredCaseWord === reversedWord;

    return isPalindrome;
}

console.log(reverseWord('cavalo'));
console.log(verifyPalindrome('arara'));

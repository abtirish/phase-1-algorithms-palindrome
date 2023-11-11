function isPalindrome(word) {
  let letters = []
  let reversedLetters = []
  // Write your algorithm here
    // The argument (word) should deconstruct into individual letters
    let indLetters = word.split('');
    // Add the indLetters to an array
    letters.push(...indLetters);
    // The word should be reassembled back to front (backwords word) and added to a new array
    reversedLetters.push(...letters.reverse());
    // Add reversedLetters to a string
    let reversedWord = reversedLetters.join('');
    // Console Log to compare the 2 words to anticipate the expected result
      console.log(reversedWord);
      console.log(word);
    // Verify that the backwards word is the same as the front word
    return (word === reversedWord);
    
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

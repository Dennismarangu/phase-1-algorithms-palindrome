function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

// function isPalindrome(str):
//   // Reverse the string using the split, reverse, and join methods
//   reversedStr = str.split('').reverse().join('')
  
//   // Compare the original string with the reversed string
//   if str equals reversedStr:
//     return true // The input string is a palindrome
//   else:
//     return false // The input string is not a palindrome

/*
  Add written explanation of your solution here
*/

function isPalindrome(str) {
  // Reverse the string using the split, reverse, and join methods
  const reversedStr = str.split('').reverse().join('');
  
  // Compare the original string with the reversed string
  return str === reversedStr;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome('madam')); // Output: true
  console.log(isPalindrome('robot')); // Output: false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(word) {
  // Write your algorithm here
  for (let i=0; i <word.length /2; i++){
    
    const j = word.length -1 -i 
    const stsrtChar = word[i]
    const endchar = word[j]

    if(stsrtChar !== endchar) return false

  }
  return true

}

/* 
  Add your pseudocode here

  irrate from the beggin to the middle of the word
    ceck the the letters
      if any letters dont match return false 
*/

/*
  Add written explanation of your solution here

  make a fuction that retruns true with a palidrome
  by reading the first and last letter of the paildrome 
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

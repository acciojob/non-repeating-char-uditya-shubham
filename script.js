function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

 
  for (let char of str) {
    
    if (charCount[char] === undefined) {
      charCount[char] = 0;
    }
    charCount[char] += 1;
  }

  // Find the first character with count === 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

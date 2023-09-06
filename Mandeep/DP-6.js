// Function to reverse a string
function reverseString(inputString) {
    // Split the string into an array of characters, reverse it, and join it back into a string
    return inputString.split('').reverse().join('');
  }
  
  console.log("Welcome to Revshare Quote Sharing!")
  // Prompt the user for input
  const input = prompt('Please Enter your Quote:');
  
  console.log("Thank you for sharing your quote.")
  // Call the function and print the reversed string
  const reversedString = reverseString(input);
  console.log('Here is your quote in reverse: "' +reversedString+ '"' )

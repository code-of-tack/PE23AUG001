// Function to check if a string is a palindrome (ignoring case)
function palindrome(input) {
    // Convert the input string to lowercase to ignore case
    const str = input.toLowerCase();
    var revstr = '';
  
    // Loop through the characters of the string in reverse order
    for (var i = str.length - 1; i >= 0; i--) {
      
      revstr += str[i];
    }
  
    return revstr;
  }
  
  // Function to process user input and display messages
  function processData() {
    
    console.log("Welcome to SocialConnect Language Analysis!");
  
    
    const input = prompt("Please enter a string to check if it's a palindrome:");
  
    // Get the reversed string
    var str1 = palindrome(input);
  
    
    if (str1 === input.toLowerCase()) {
      
      console.log("Thank you for providing the string.");
      console.log(`The string "${input}" is a palindrome.`);
    } else {
      // If it doesn't match, it's not a palindrome
      console.log("Thank you for providing the string.");
      console.log(`The string "${input}" is not a palindrome.`);
    }
  }
  
  // Call the processData function 
  processData();
  
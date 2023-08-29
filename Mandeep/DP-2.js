// Function to count the number of vowels in a given sentence
function countVowels(sentence) {
    // Define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;// Initialize a count variable to keep track of vowel count

   // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Check if the lowercase version of the character is in the vowels
      if (vowels.includes(sentence[i].toLowerCase())) {
        count++; // Increment the count if the character is a vowel
      }
    }
  
    return count; // Return the final vowel count
  }
  
 console.log("Welcome to LinguaTech Pronunciation Analyzer!");
 // Prompt the user to enter a sentence
  const sentence = prompt("Please enter a sentence to count the number of vowels:");
  console.log("Thank you for providing the sentence."); 
  // Call the countVowels function to get the vowel count
  const vowelCount = countVowels(sentence);
  //Display the result
  console.log(`The sentence "${sentence}" contains ${vowelCount} vowels.`);

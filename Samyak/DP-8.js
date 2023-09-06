// Main function to find frequency and display messages
function frequency() {
    console.log("Welcome to TextInsight Character Frequency Analysis!")
    var input = prompt("Please enter the text you would like to analyze:")
    console.log("Thank you for providing the text for analysis.")

    var str = input // Convert the input to lowercase for case-insensitivity
    var object1 = {}; // Declaring a new object
  
    for (var i = 0; i < str.length; i++) {
      var c = 0; // initializing the counter 0
      for (var j = 0; j < str.length; j++) {
        if (str[j] == str[i]) {
          c++; // Counting the occurrences 
        }
      }
      object1[str[i]] = c; // Use str[i] as the key to store the frequency of str[i]
    }
  
    console.log("Here is the character frequency analysis:");
    for (var key in object1) { // Itrating through all the keys
        if (object1[key]>1){
            console.log(`- '${key}' occurs ${object1[key]} times`);
        } else {
            console.log(`- '${key}' occurs ${object1[key]} time`);
        }
    }
  }
  
  // Calling main function
 frequency()
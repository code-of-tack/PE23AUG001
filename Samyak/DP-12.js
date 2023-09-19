// Function to find the longest common prefix among a list of strings
function LongestPrefix(strings) {
    // Check if the list of search results is empty
    if (strings.length === 0) {
      return '';
    }
    
    // Initialize the longest common prefix as the first search result
    let longestCommonPrefix = strings[0];
    
    // Loop through each search result in the list
    for (let i = 1; i < strings.length; i++) {
      const currentSearchResult = strings[i];
      let j = 0;
      
      // Find the common prefix between the current search result and the longest common prefix
      while (j < longestCommonPrefix.length && j < currentSearchResult.length && longestCommonPrefix[j] === currentSearchResult[j]) {
        j++;
      }
      
      // Update the longest common prefix
      longestCommonPrefix = longestCommonPrefix.slice(0, j);
      
      // If the longest common prefix becomes empty, there is no common prefix among the search results
      if (longestCommonPrefix === '') {
        break;
      }
    }
    
    // Return the longest common prefix among the search results
    return longestCommonPrefix;
  }
  
  // Function to prompt the user for input and find the longest common prefix
  function processData() {
    const searchResults = [
      "apple pie recipe",
      "apple pie with cinnamon",
      "apple pie filling",
      "apple pie crust"
    ];
    
    // Display the search results
    console.log('Welcome to SearchMaster!');
    console.log('Here are the search results related to your query:');
    searchResults.forEach((result, index) => {
      console.log(`${index + 1}. "${result}"`);
    });
    
    // Find the longest common prefix among the search results
    const longestCommonPrefix = LongestPrefix(searchResults);
    
    // Display the result
    console.log(`The longest common prefix among these search results is: "${longestCommonPrefix}"`);
  }
  
  // Call the function to start the program
  processData();

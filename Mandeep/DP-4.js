// Function to sort product names in alphabetical order
function sortProductNames(productNames) {
    // Convert the list of product names to lowercase to ensure case-insensitive sorting
    const lowerCaseProductNames = productNames.map((productName) => productName.toLowerCase());
    // Sort the list of product names in alphabetical order
    const sortedProductNames = lowerCaseProductNames.sort();
    // Return the sorted list of product names
    return sortedProductNames;
  }
  console.log("Welcome to MarketSquare Product Management!")
  // Get the list of product names from the user
  const productNames = prompt("Please enter your product names, separated by commas:");
  // Split the list of product names into an array
  const productNamesArray = productNames.split(',');
  // Sort the list of product names
  const sortedProductNames = sortProductNames(productNamesArray);
  console.log("Thank you for providing the product names.")
  // Display the sorted list of product names
  console.log("Here is the sorted list of product names:");
  for (const productName of sortedProductNames) {
    console.log(`- ${productName}`);
  }

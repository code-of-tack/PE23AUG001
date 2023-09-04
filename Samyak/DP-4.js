//main function to process the data 
function products(input) {
    var str = input;
    var words = [];

    words = str.split(",");

    // Remove leading and trailing spaces from each word
    words = words.map(word => {
        return word.trim();
    });

    words.sort();  // Sort the original 'words' array

    return words;
}

//function to display messages and take input
function processData() {
    console.log("Welcome to MarketSquare Product Management!");

    let input = prompt("Please enter your product names, separated by commas:");

    let data = products(input);

    if (data.length === 0) {
        console.log("No valid product names entered. Exiting.");
        return;
    }

    console.log("Thank you for providing the product names.");
    console.log("Here is the sorted list of product names:");
    
    for (let i = 0; i < data.length; i++) {
        console.log(" - " + data[i]);
    }
}

processData();  // Call the function to start the process

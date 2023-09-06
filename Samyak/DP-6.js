//main function to procees strings
function RevString(input) {
    var str = ""; // Initialize str as an empty string

    for (var i = input.length - 1; i >= 0; i--) {
        str = str.concat(input[i]); // Concatenate characters to str
    }

    return str;
}

//function to display messages
function ProcessData() {
    console.log("Welcome to RevShare Quote Sharing!");
    let quote = prompt("Please enter your quote:");
    //calling main function
    let revquote = RevString(quote);
    console.log("Thank you for sharing your quote.");
    console.log("Here is your quote in reverse: " + revquote);
}

//calling function
ProcessData();

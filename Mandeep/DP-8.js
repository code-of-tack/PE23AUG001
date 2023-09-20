function frequency() {
    console.log("Welcome to TextInsight Character Frequency Analysis!");
    var input = prompt("Please enter the text you would like to analyze:");
    console.log("Thank you for providing the text for analysis.");

    var str = input.toLowerCase(); // Convert the input to lowercase for case-insensitivity
    var characterCount = {};

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        characterCount[char] = (characterCount[char] || 0) + 1;
    }

    console.log("Here is the character frequency analysis:");
    for (var key in characterCount) {
        var times = characterCount[key] === 1 ? "time" : "times";
        console.log(`- '${key}' occurs ${characterCount[key]} ${times}`);
    }
}

// Calling the main function
frequency();

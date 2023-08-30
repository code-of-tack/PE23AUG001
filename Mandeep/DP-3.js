// Function to generate the Fibonacci sequence up to a given number 'n'
function generateFibonacci(n) {
    // Initialize the Fibonacci sequence with the first two numbers: 0 and 1
    let fibSequence = [0, 1];

    // Keep generating Fibonacci numbers until the next number is greater than 'n'
    while (true) {
        let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        if (nextFib <= n) {
            fibSequence.push(nextFib);
        } else {
            break;
        }
    }

    // Return the generated Fibonacci sequence
    return fibSequence;
}

// Main function
function main() {
    console.log("Welcome to FinPlanPro Fibonacci Generator!");
    
    // Prompt the user to input the number 'n'
    const n = parseInt(prompt("Please enter the desired number 'n' to generate the Fibonacci sequence:"));

    // Generate the Fibonacci sequence up to the provided number
    const fibSequence = generateFibonacci(n);

    // Display the generated Fibonacci sequence
    console.log(`\nThank you for providing the number 'n'.`);
    console.log(`The Fibonacci sequence up to ${n} is: ${fibSequence.join(', ')}`);
}

// Call the main function to start the program
main();

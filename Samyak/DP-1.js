//function to calculate sum and Average
function calculateSumAndAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]);
    }
    
    const average = sum / numbers.length;
    return { sum, average };
}

//function to process input
function processData(input) {
    const numberStrings = input.split(" ");
    const numbers = numberStrings.map(parseFloat);
    //check is input is valid or not
    if (numbers.some(isNaN)) {
        console.log("Invalid input. Please provide a series of numbers separated by spaces.");
        return;
    }

    const { sum, average } = calculateSumAndAverage(numbers);

    
    console.log("The sum of the numbers is:", sum.toFixed(2)); // Fix to 2 decimal places
    console.log("The average of the numbers is:", average.toFixed(2)); // Fix to 2 decimal places
}
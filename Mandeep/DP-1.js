//Enter a series of numbers seperated by spaces 
const input = prompt("Enter a series of numbers seperated by spaces:");
//Split the input into an array of numbers
const numbers = input.split(" ").map(Number);
//Calculate the sum of numbers
const sum = numbers.reduce((acc, curr)=>acc + curr,0);
//Calculate the average of numbers
const average = sum / numbers.length;
//Print the sum and average 
console.log("Sum:",sum);
console.log("Average:",average);

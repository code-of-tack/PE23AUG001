// Function to calculate the factorial of a number
function calcFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calcFactorial(number - 1);
    }
  }
  
  // Function to display messages and take input
  function processData() {
    console.log('Welcome to CalcPro Factorial Calculation!');
    const input = prompt("Please enter the number for which you want to calculate the factorial: ")
    const number = parseInt(input);

      if (isNaN(number) || number < 0) {
        console.log('Invalid input. Please enter a non-negative integer.');
      } else {
        const factorial = calcFactorial(number);
        console.log(`Thank you for providing the number for factorial calculation.`);
        console.log(`The factorial of ${number} is: ${factorial}`);
      }
    };
  
  
  // Call the main function
  processData();
  
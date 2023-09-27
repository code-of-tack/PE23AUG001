// Function to sort a list of integers in ascending order using a loop
function sortIntegers(input) {
    const n = input.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (input[j] > input[j + 1]) {
          // Swap the elements if they are in the wrong order
          const temp = input[j];
          input[j] = input[j + 1];
          input[j + 1] = temp;
        }
      }
    }
    
    return input;
  }
  
  // Function to interact with the user and perform sorting
  function processData() {
    console.log('Welcome to DataAnalyzer Data Sorting!');
    const input = prompt("Please enter the list of integers you want to sort, separated by spaces: ")
    const inputnum = input.split(' ').map(item => parseInt(item));
  
      if (inputnum.some(isNaN)) {
        console.log('Invalid input. Please enter a list of integers separated by spaces.');
      } else {
        const sortedList = sortIntegers(inputnum);
        console.log('Thank you for providing the list for sorting.');
        console.log('Here is the sorted list in ascending order:');
        console.log(sortedList.join(' '));
      }
  }
  
  // Call the dataSorting function to start the program
  processData();
  
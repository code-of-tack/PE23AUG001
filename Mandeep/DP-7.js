// Function to find the maximum and minimum values in an array
function findMaxAndMin(weights) {
    if (weights.length === 0) {
      return { max: null, min: null };
    }
  
    let max = weights[0];
    let min = weights[0];
  
    for (let i = 1; i < weights.length; i++) {
      if (weights[i] > max) {
        max = weights[i];
      }
      if (weights[i] < min) {
        min = weights[i];
      }
    }
  
    return { max, min };
  }
  
  // Function to get user input and process weights
  function processWeightsInput() {
    console.log("Welcome to FitTrack Weight Tracking!");
    
    const input = prompt("Please enter the weights lifted during your workout session, separated by commas:");
    
    if (!input) {
      console.log("No data entered. Please provide a list of weights.");
      return;
    }
  
    const weights = input.split(',').map(weight => parseInt(weight.trim()));
  
    const result = findMaxAndMin(weights);
  
    console.log("Thank you for providing your weight data.");
    
    console.log(`The largest weight lifted during your workout session was: ${result.max} kg`);

    console.log(`The smallest weight lifted during your workout session was: ${result.min} kg`);

  }
  
  // Call the function to process input
  processWeightsInput();

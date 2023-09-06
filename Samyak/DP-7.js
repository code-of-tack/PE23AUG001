//main function for processing weights
function weights(input) {
    var weight = [];
    var max = 0;
  
    weight = input.split(","); //split weights from comma
    for (var i = 0; i < weight.length; i++) {
      var element = parseFloat(weight[i]); // Convert string to a number
      if (element > max) {
        max = element;
      }
    }
    var min = max;
    for (var i = 0; i < weight.length; i++) {
      var element2 = parseFloat(weight[i]); // Convert string to a number
      if (element2 < min) {
        min = element2;
      }
    }
  
    return [min, max];
  }
  
  // function for displaying all the messages
  function processData() {
    console.log("Welcome to FitTrack Weight Tracking!");
    var input = prompt("Please enter the weights lifted during your workout session, separated by commas:");
    var arr = [];
    arr = weights(input); // calling the main function
  
    console.log("The largest weight lifted during your workout session was: " + arr[1] + " kg");
    console.log("The smallest weight lifted during your workout session was: " + arr[0] + " kg");
  }
  
  //function calling
  processData();
  
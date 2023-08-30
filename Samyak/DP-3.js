// main funcion to process data and logic
function Finplanpro(input) {
    var c = 1; // Initialize c with 1 to start Fibonacci sequence
    var arr = [1]; // Initialize the array with the first Fibonacci number
    
    var a = 0;
    var b = 1;
    //logic to check for Fibonacci number
    while (c < input) {
        c = a + b;
        a = b;
        b = c;
        if (c < input) {
            arr.push(c);
        }
    }
    
    return arr;
}

//funcion to display messages and call main function
function processData() {
    console.log('Welcome to FinPlanPro Fibonacci Generator!');
    let n = prompt("Please enter the desired number 'n' to generate the Fibonacci sequence:");
    let num = []; // Initialize the array 
    num = Finplanpro(n);
    console.log("Thank you for providing the number 'n'.");
    console.log('The Fibonacci sequence up to ' + n + ' is: ' + num);
}

//calling the secondary function
processData();



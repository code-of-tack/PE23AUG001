//main function to perform bubbleSort
function Sort(arr) {
    let len = arr.length;
    let swap; //variable to swap values
    do {
        swap = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
}

//function to take input and display messages
function SecondLargest() {
    console.log("Welcome to ShopSmart Product Browsing!");
    
    // Prompt the user for input and split it into an array
    var input = prompt("Enter a list of integers separated by commas");
    var arr = input.split(",").map(Number); // Split and convert to numbers
    
    if (arr.length < 2) {
        console.log("Enter more than one integer");
        return;
    }

    Sort(arr);

    // The second-largest element will be at arr.length - 2 index.
    console.log(arr[arr.length - 2]);
}

//calling the function
SecondLargest();

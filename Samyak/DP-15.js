// Sorted list of numbers
const sortedList = [1, 6, 7, 11, 17, 21, 35, 42, 57, 72, 86, 99];

// Function for binary search
function BSearch(targetElement, arr) {
    let left = 0;
    let right = arr.length - 1;
    let index = -1;

    //finding index of element
    for (let i = 0; i < arr.length; i++) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === targetElement) {
            index = mid;
            break;
        } else if (arr[mid] < targetElement) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return index;
}

// Function to handle user input and display messages
function processData() {

    console.log('Welcome to Searchify!');
    const input = prompt("Please enter the element you want to search for:")

        // Convert the user input to a number
        const userInput = parseInt(input);

        const ind = BSearch(userInput, sortedList);

        if (ind !== -1) {
            console.log(`Thank you for providing the search element.`);
            console.log(`The element ${input} was found at index ${ind}.`);
        } else {
            console.log(`Thank you for providing the search element.`);
            console.log(`The element ${input} was not found in the list.`);
        }

       
    }


// Call the function to start the program
processData();

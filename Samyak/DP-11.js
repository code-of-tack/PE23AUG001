const fs = require('fs');

// Function to read and process the CSV file
function readfiledata(path) {
    try {
        // Read the file and store its content in 'data'
        const data = fs.readFileSync(path, 'utf8');

        let sum = 0;
        let count = 0;

        // Split the data into rows by newline characters
        const rows = data.split('\n');

        // Loop through each row of the CSV data
        for (let i = 0; i < rows.length; i++) {
            // Split the row into columns using a comma 
            const columns = rows[i].split(',');
            
            const score = parseFloat(columns[1]);
            
            // Check if the score is a valid number
            if (!isNaN(score)) {
                
                sum += score;
                count++;
            }
        }

        let average;

        // Calculate the average 
        if (count === 0) {
            average = 0;
        } else {
            average = sum / count;
        }

        return average;
    } catch (err) {
        // Handle any errors that occur during file reading
        console.error('Error in reading the file:', err);
        return null;
    }
}

// Function to process the data and display the messages
function processData() {
    console.log("Welcome to DataMetrics Data Analytics!");
    const path = prompt("Please enter the path or name of the CSV file: ");
    const avg = readfiledata(path);

    if (avg !== null) {
        console.log("Thank you for providing the CSV file.");
        console.log("The average value of the 'Sales' column is: $" + avg);
    } else {
        console.error('Error in processing data.');
    }
}

// Calling the  function 
processData();

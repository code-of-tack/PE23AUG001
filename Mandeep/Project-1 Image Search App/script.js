// Define your Unsplash API access key
const accessKey = "XMe-_jantxJM9ou_OzlCim2yiDBvCVjfIK3NH81GLuw";

// Select HTML elements
const formEl = document.querySelector("form"); // Get the form element
const inputEl = document.getElementById("search-input"); // Get the search input element
const searchResults = document.querySelector(".search-results"); // Get the container for search results
const showMore = document.getElementById("show-more-button"); // Get the "Show more" button
const clearButton = document.getElementById('clear-button'); // Get the "Clear" button

// Initialize variables
let inputData = ""; // Initialize a variable to store the search input
let page = 1; // Initialize the page number for pagination

// Function to fetch and display search results
async function searchImages() {
    inputData = inputEl.value; // Get the search input value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = ""; // Clear the previous search results when searching for the first page
    }

    results.map(async (result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result"); // Create a div for each search result

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description; // Create an image element for each result

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description; // Create a link to the Unsplash page for each result

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);

       const downloadButton = document.createElement("button");
    downloadButton.className = "download-button";
    downloadButton.textContent = "Download";

        const response = await fetch(result.urls.full);
    const blob = await response.blob();

    // Create an object URL for the Blob
    const blobUrl = window.URL.createObjectURL(blob);

    // Set the download URL to the Blob URL
    downloadButton.addEventListener("click", () => {
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = `${result.alt_description}.jpg`;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
    });
        imageWrapper.appendChild(downloadButton);

        const hideButton = document.createElement("button");
        hideButton.className = "hide-button";
        hideButton.textContent = "Hide";
        hideButton.addEventListener("click", () => {
            imageWrapper.style.display = "none"; // Hide the image wrapper when the "Hide" button is clicked
        });

        imageWrapper.appendChild(hideButton);
        searchResults.appendChild(imageWrapper); // Add each result to the search results container
    });

    page++;
    if (page > 1) {
        showMore.style.display = "block"; // Show the "Show more" button when there are multiple pages of results
    }
}

// Event listener for the search form submission
formEl.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission
    page = 1; // Reset the page to 1 when performing a new search
    searchImages(); // Call the searchImages function to fetch and display results
});

// Event listener for the "Show more" button click
showMore.addEventListener("click", () => {
    searchImages(); // Call the searchImages function to load more results
});

// Event listener for the "Clear" button click
clearButton.addEventListener('click', () => {
    inputEl.value = ''; // Clear the input field when the "Clear" button is clicked
});

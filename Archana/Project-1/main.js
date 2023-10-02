const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector("#meme-image");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");
const backBtn = document.querySelector(".meme-generator .back-btn");
const goToPageBtn = document.getElementById("goToPage-btn");

let previousMeme = null;

// Function to update meme details on the page
const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = 'Meme by: ' + author;
};

// Function to generate a new meme 
const generateMeme = () => {
    // Fetch a meme from the API
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            // Store the current meme as the previous meme
            previousMeme = {
                url: memeImage.getAttribute("src"),
                title: memeTitle.innerHTML,
                author: memeAuthor.innerHTML.substring(11) 
            };

            // Update the page with the new meme
            updateDetails(data.url, data.title, data.author);
        });
};

// Function to go back to the previous meme
const backToPreviousMeme = () => {
    if (previousMeme !== null) {
        // Restore the previous meme's details
        updateDetails(previousMeme.url, previousMeme.title, previousMeme.author);
        previousMeme = null; 
    }
};

// Event listener for generating a new meme
generateMemeBtn.addEventListener("click", generateMeme);

// Function to navigate to a meme page
function goToPage(imageUrl) {
    try {
        window.location.href = imageUrl;
    } catch (error) {
        console.error("Error navigating to page:", error);
    }
}

// Event listener for the "goToPage" button
goToPageBtn.addEventListener("click", function() {
    goToPage(memeImage.getAttribute("src"));
});

// Event listener for going back to the previous meme
backBtn.addEventListener("click", backToPreviousMeme);

// Initial generation of a meme
generateMeme();

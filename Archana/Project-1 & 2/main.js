const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector("#meme-image");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");
const backBtn = document.querySelector(".meme-generator .back-btn");
const goToPageBtn = document.getElementById("goToPage-btn");
const memeHistory = [];
let currentMemeIndex = -1; // Declare the current meme index

// Creating a GSAP timeline
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

const updateDetails = (url, title, author) => {
    // Animate the current meme fade-out
    tl.to([memeImage, memeTitle, memeAuthor], { opacity: 0, duration: 0.6, stagger: 0.2, onComplete: () => {
        memeImage.setAttribute("src", url);
        memeTitle.innerHTML = title;
        memeAuthor.innerHTML = 'Meme by: ' + author;

        // Animate the new meme fade-in
        tl.to([memeImage, memeTitle, memeAuthor], { opacity: 1, duration: 0.4, stagger: 0.4 });
    } });
};

const generateMeme = () => {
    try {
        // Fetch a meme from the API
        fetch("https://meme-api.com/gimme/wholesomememes")
            .then((response) => response.json())
            .then((data) => {
                // Add the new meme to the meme history
                memeHistory.push(data);
                currentMemeIndex = memeHistory.length - 1;

        
                updateDetails(data.url, data.title, data.author);

                // Enable the "Previous Meme" button
                backBtn.disabled = false;
            })
            .catch((error) => {
                console.error("Error fetching meme:", error);
            });
    } catch (error) {
        console.error("Error in generateMeme:", error);
    }
};


const backToPreviousMeme = () => {
    if (currentMemeIndex > 0) {
        currentMemeIndex--;

        const previousMeme = memeHistory[currentMemeIndex];

        // Animate the current meme fade-out
        tl.to([memeImage, memeTitle, memeAuthor], { opacity: 0, duration: 0.4, stagger: 0.2, onComplete: () => {
            updateDetails(previousMeme.url, previousMeme.title, previousMeme.author);

            // Enable the "Next Meme" button
            generateMemeBtn.disabled = false;

            // Disable the "Previous Meme" button if we reached the first meme
            if (currentMemeIndex === 0) {
                backBtn.disabled = true;
            }
        } });
    }
};

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
goToPageBtn.addEventListener("click", function () {
    goToPage(memeImage.getAttribute("src"));
});

backBtn.addEventListener("click", backToPreviousMeme);

generateMeme();

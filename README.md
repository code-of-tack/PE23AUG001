# Project EarlyBird - Daily Coding Process ✨

Welcome to Project EarlyBird's coding exercise submission process! This document outlines the steps you need to follow to submit your daily problem-solving exercises using GitHub.

## Steps to Submit Your Code 🚀

1. **Fork the Repository 🍴**
   - Click on the "Fork" button at the top right corner of the repository page. This will create a copy of the repository under your GitHub account.

2. **Clone the Repository 📥**
   - Open your preferred terminal or Git client.
   - Run the following command to clone the repository to your local machine:
     ```
     git clone <forked_repository_url>
     ```
     Replace `<forked_repository_url>` with the URL of your forked repository. You can find the URL by clicking on the "Code" button and copying the provided URL.

3. **Update Your Code 🔃**
   - Before starting a new coding exercise, ensure that your local code is up to date by running the following commands:
     ```
     git checkout main
     git pull origin main
     ```

4. **Create a New Branch 🌿**
   - For each coding exercise, create a new branch with the following naming convention:
     ```
     {First three letters of your name}-{Exercise number (2 digits)}
     ```
     For example, if your name is John Doe and you are working on the third exercise, the branch name should be `JOH-03`.
   - Run the following command to create a new branch:
     ```
     git checkout -b {branch_name}
     ```
     Replace `{branch_name}` with the appropriate branch name.

5. **Create a Folder and File 📂**
   - Inside the repository, create a folder with your name (if you haven't created one already).
   - Create a `.py`, `.java`, or `.js` file, as per the requirements, to resolve the problem statement.
   - Ensure you follow clean code principles, such as using appropriate variable names, adding comments, and maintaining proper formatting.
   - Add the problem statement as a comment at the beginning of the file.

6. **Push Your Code 📤**
   - After completing the coding exercise, push your code to the branch you created using the following command:
     ```
     git push origin {branch_name}
     ```
     Replace `{branch_name}` with the name of your branch.

7. **Commit and Review ✔️**
   - Before committing, make sure to review your changes and ensure everything is correct.
   - Commit your changes with an appropriate commit message:
     ```
     git commit -m "Add solution for exercise {exercise_number}"
     ```
     Replace `{exercise_number}` with the exercise number you worked on.

8. **Create a Pull Request 🚀**
   - Once you have committed your changes, go to the repository page on GitHub.
   - Click on the "Pull requests" tab.
   - Click on the "New pull request" button.
   - Select the base repository as the original repository and the base branch as `main`.
   - Select your forked repository and the branch you created as the compare branch.
   - Click on the "Create pull request" button to submit your code for review.

Congratulations! You have successfully submitted your coding exercise. Our mentors will review your code and provide feedback.

If you have any questions or need assistance, please reach out to the program coordinators.

Happy Tacking! 🎉

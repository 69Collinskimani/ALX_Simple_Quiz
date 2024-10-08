// Define the function to check the user's answer
function checkAnswer() {
    // Correct answer is "4"
    const correctAnswer = "4";
    
    // Retrieve the selected radio button value
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Select the feedback paragraph element
    const feedback = document.getElementById('feedback');
    
    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the user's selected value to the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";  // Set feedback color to green
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";  // Set feedback color to red
        }
    } else {
        // If no answer is selected, prompt the user to choose an option
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";  // Set feedback color to orange
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

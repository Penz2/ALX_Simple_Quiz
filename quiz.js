// Step 1: Define the function
function checkAnswer() {
  // Step 2: Identify the correct answer
  const correctAnswer = "4";

  // Step 3: Retrieve the user's answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  
  // Guard clause if no option is selected
  if (!selectedOption) return;

  const userAnswer = selectedOption.value;

  // Step 4: Compare the answer and give feedback
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Step 5: Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

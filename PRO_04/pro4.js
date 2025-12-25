const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.querySelector(".guess-input");
const checkBtn = document.querySelector(".check-btn");
const message = document.querySelector(".message");
const attemptsText = document.querySelector(".attempts");
const resetBtn = document.querySelector(".reset-btn");

checkBtn.addEventListener("click", () => {
  const guess = Number(input.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = " Enter a number between 1 and 100";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = " Correct! You guessed it!";
    attemptsText.textContent = `Attempts: ${attempts}`;
    checkBtn.disabled = true;
  } 
  else if (guess < randomNumber) {
    message.textContent = " Too Low!";
  } 
  else {
    message.textContent = " Too High!";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
  input.value = "";
});

resetBtn.addEventListener("click", () => {
  location.reload();
});

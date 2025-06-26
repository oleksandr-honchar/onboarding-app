let currentScreen = 1;

function showScreen(screenNumber) {
  // Hide all screens
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.add("hidden");
  });

  // Show the selected screen
  document.getElementById(`screen-${screenNumber}`).classList.remove("hidden");

  // Update the button states
  updateButtonStates(screenNumber);
}

function updateButtonStates(screenNumber) {
  // Disable the buttons that correspond to the screen
  document.querySelectorAll(".day-button").forEach((button, index) => {
    const dayIndex = index + 1;
    button.disabled = dayIndex === screenNumber;
  });
}

// Attach event listeners to buttons
document
  .getElementById("day1-btn")
  .addEventListener("click", () => showScreen(1));
document
  .getElementById("day2-btn")
  .addEventListener("click", () => showScreen(2));
document
  .getElementById("day3-btn")
  .addEventListener("click", () => showScreen(3));

// Initial screen
showScreen(currentScreen);

let currentScreen = 1;

function showScreen(screenNumber) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.add("hidden");
  });

  document.getElementById(`screen-${screenNumber}`).classList.remove("hidden");

  updateButtonStates(screenNumber);
}

function updateButtonStates(screenNumber) {
  document.querySelectorAll(".day-button").forEach((button, index) => {
    const dayIndex = index + 1;
    button.disabled = dayIndex === screenNumber;
  });
}

document
  .getElementById("day1-btn")
  .addEventListener("click", () => showScreen(1));
document
  .getElementById("day2-btn")
  .addEventListener("click", () => showScreen(2));
document
  .getElementById("day3-btn")
  .addEventListener("click", () => showScreen(3));

showScreen(currentScreen);

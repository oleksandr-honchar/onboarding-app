let current = 1;

function showStep(n) {
  document.querySelectorAll(".step").forEach((el, i) => {
    el.classList.toggle("hidden", i !== n - 1);
  });
  document.getElementById("progress").style.width = n * 33.33 + "%";
  document.getElementById("step-label").textContent = `Прогрес: ${n}/3`;
}

function nextStep() {
  if (current < 3) current++;
  showStep(current);
}

function prevStep() {
  if (current > 1) current--;
  showStep(current);
}

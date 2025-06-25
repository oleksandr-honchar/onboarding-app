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

document.getElementById("doneButton").addEventListener("click", () => {
  alert("Чудово! Ви зробили перший крок до своєї мети! 🎉");

  // Затримка та перехід на головний екран
  setTimeout(() => {
    showMainScreen(); // функція, яка показує головний екран
  }, 2000);
});

function showMainScreen() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div class="main-screen">
        <h2>🥗 План на день</h2>
        <ul>
          <li>Сніданок: Вівсянка з ягодами – 300 ккал</li>
          <li>Обід: Курка з гречкою – 450 ккал</li>
          <li>Вечеря: Салат з тунцем – 350 ккал</li>
        </ul>
        <p>📅 Тижневий план генерується у фоні...</p>
      </div>
    `;
}

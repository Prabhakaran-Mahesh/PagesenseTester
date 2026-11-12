const form = document.getElementById("signup-form");
const toast = document.getElementById("toast");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

let hideTimer;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  toast.textContent = name
    ? `You're in, ${name}. Welcome aboard.`
    : "You're in. Welcome aboard.";
  toast.classList.add("is-visible");

  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 4000);

  form.reset();

  window.pagesense = window.pagesense || [];
  window.pagesense.push(["identifyUser", email]);
});

let toggle_dark_btn = document.getElementById("toggle-dark-btn");
let nav = document.getElementsByTagName("nav")[0];
let clickCount = 0;

// Initially set the dark mode
document.body.classList.add("toggle-dark-mode");
nav.classList.add("navbar-dark");

toggle_dark_btn.addEventListener("click", () => {
  if (clickCount === 0) {
    // Switch to light mode on the first click
    toggle_dark_btn.innerHTML = `<i class="fa-solid fa-sun mr-1"></i><span id="dark-text"> Light Mode</span>`;
    document.body.classList.remove("toggle-dark-mode");
    nav.classList.remove("navbar-dark");
  } else {
    // Toggle between light and dark mode on subsequent clicks
    if (toggle_dark_btn.innerHTML === `<i class="fa-solid fa-moon mr-1"></i><span id="dark-text"> Dark Mode</span>`) {
      toggle_dark_btn.innerHTML = `<i class="fa-solid fa-sun mr-1"></i><span id="dark-text"> Light Mode</span>`;
      document.body.classList.remove("toggle-dark-mode");
      nav.classList.remove("navbar-dark");
    } else {
      toggle_dark_btn.innerHTML = `<i class="fa-solid fa-moon mr-1"></i><span id="dark-text"> Dark Mode</span>`;
      document.body.classList.add("toggle-dark-mode");
      nav.classList.add("navbar-dark");
    }
  }

  clickCount++;
});

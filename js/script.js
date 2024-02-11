const toggleButton = document.querySelector(".toggleButton");
const toggleButtonIcon = document.querySelector(".toggleButton i");
const dropdown = document.querySelector(".menuDrop");

toggleButton.onclick = function () {
  dropdown.classList.toggle("open");
  const isOpen = dropdown.classList.contains("open");

  toggleButtonIcon.classList = isOpen ? "ri-close-fill" : "ri-menu-line";
};


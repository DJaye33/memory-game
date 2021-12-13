const selectThemes = document.querySelectorAll(".theme");
const selectPlayers = document.querySelectorAll(".players");
const selectGrid = document.querySelectorAll(".grid");
const MenuBtn = document.querySelector(".menu");
const gameMenu = document.querySelector(".game-menu");
const menuOverlay = document.querySelector(".overlay");

menuOverlay.addEventListener("click", (evt) => {
  evt.target.classList.toggle("active");
  gameMenu.classList.toggle("active");
});

const startMenuSelectionActive = (selectionArr, selectionType) => {
  selectionArr.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
      // Creates array of currently active - only one element
      let current = document.querySelectorAll(`.${selectionType}.active`);
      current[0].classList.remove("active");
      evt.target.classList.add("active");
    });
  });
};

MenuBtn.addEventListener("click", (evt) => {
  menuOverlay.classList.add("active");
  gameMenu.classList.toggle("active");
});

startMenuSelectionActive(selectThemes, "theme");
startMenuSelectionActive(selectPlayers, "players");
startMenuSelectionActive(selectGrid, "grid");

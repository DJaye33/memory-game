const selectThemes = document.querySelectorAll(".theme");
const selectPlayers = document.querySelectorAll(".players");
const selectGrid = document.querySelectorAll(".grid");

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

startMenuSelectionActive(selectThemes, "theme");
startMenuSelectionActive(selectPlayers, "players");
startMenuSelectionActive(selectGrid, "grid");

const bookmarkButton = document.querySelector("[data-js=bookmark1]");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--mark");
}); /* bookmark von erste Frage wird getriggert */

const answer1H3Element = document.querySelector("[data-js=show-answer1]");
const showAnswerButton = document.querySelector(
  "[data-js=show-answer1-button]"
);

showAnswerButton.addEventListener("click", () => {
  answer1H3Element.classList.remove("hide");
  showAnswerButton.classList.add("hide");
});

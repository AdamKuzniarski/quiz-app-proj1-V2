const bookmarkButton = document.querySelector("[data-js=bookmark1]");
const answer1Element = document.querySelector("[data-js=show-answer1]");
const showAnswerButton = document.querySelector(
  "[data-js=show-answer1-button]"
);
const hideAnswerButton = document.querySelector(
  "[data-js=hide-answer1-button]"
);

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--mark");
});

function toggleAnswer() {
  const isHidden = answer1Element.classList.contains("hide");
  answer1Element.classList.toggle("hide");
  showAnswerButton.classList.toggle("hide", !isHidden);
  hideAnswerButton.classList.toggle("hide", isHidden);
}

showAnswerButton.addEventListener("click", toggleAnswer);
hideAnswerButton.addEventListener("click", toggleAnswer);

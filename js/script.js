const bookmarkButton = document.querySelector("[data-js=bookmark1]");
const textArea1 = document.querySelector("[data-js=textarea1-counter]");
const textArea2 = document.querySelector("[data-js=textarea2-counter]");

textArea1.addEventListener("input", updateCharCount);


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

function updateCharCount() {
  const textarea = document.querySelector('[data-js="textarea1-counter"]');
  const maxLength = textarea.getAttribute("maxlength");
  const currentLength = textarea.value.length;
  document.getElementById("char-count").textContent = `${
    maxLength - currentLength
  } characters left`;
}

/* New Card Section */
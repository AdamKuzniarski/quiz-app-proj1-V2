const bookmarkButton = document.querySelector("[data-js=bookmark1]");
const textArea1 = document.querySelector("[data-js=textarea1-counter]");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--mark");
});

console.log("test");

textArea1.addEventListener("input", updateCharCount);

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

/* new Card */
const mainSection = document.querySelector('[data-js="main-element"]');
const newCard = document.createElement("div");

newCard.innerHTML = `
<article class="card border-btm">
          <div class="question">
            <button class="icon-button" data-js="bookmark1">
              <i class="fa-solid fa-bookmark question__bookmark"></i>
            </button>
            <h2>
              Question: What does <br />
              CSS stand for?
            </h2>
`;

mainSection.append(newCard);

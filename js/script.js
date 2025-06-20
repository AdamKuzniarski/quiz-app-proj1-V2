const bookmarkButton = document.querySelector("[data-js=bookmark1]");
const textArea1 = document.querySelector("[data-js=textarea1-counter]");
const charCountElement = document.querySelector('[data-js="counter1"]');
const answer1H3Element = document.querySelector("[data-js=show-answer1]");
const showAnswerButton = document.querySelector(
  "[data-js=show-answer1-button]"
);

if (bookmarkButton) {
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--mark");
  });
}

if (textArea1 && charCountElement) {
  textArea1.addEventListener("input", updateCharCount);
  updateCharCount();
}

if (showAnswerButton && answer1H3Element) {
  showAnswerButton.addEventListener("click", () => {
    answer1H3Element.classList.remove("hide");
    showAnswerButton.classList.add("hide");
  });
}

function updateCharCount() {
  const maxLength = textArea1.getAttribute("maxlength");
  const currentLength = textArea1.value.length;
  charCountElement.textContent = `${maxLength - currentLength} characters left`;
}

/* Data Form */

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
});

/* new Card */
const mainSection = document.querySelector('[data-js="main-element"]');
const newCard = document.createElement("div");

newCard.innerHTML += `
      <article class="card border-btm">
          <div class="question">
            <button class="icon-button" data-js="bookmark1">
              <i class="fa-solid fa-bookmark question__bookmark"></i>
            </button>
            <h2>
              Question: What does <br />
              CSS stand for?
            </h2>
          </div>
          <div class="answer">
            <button class="answer__btn" data-js="show-answer1-button">
              Show the answer
            </button>
            <h3 class="hide" data-js="show-answer1">Cascading Style Sheets</h3>
            <div class="tags-container">
              <p class="tag">#html</p>
              <p class="tag">#css</p>
            </div>
          </div>
        </article>
`;

if (mainSection) {
  mainSection.appendChild(newCard);
}

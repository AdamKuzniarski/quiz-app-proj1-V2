
const textArea1 = document.querySelector("[data-js=textarea1-counter]");
const charCountElement = document.querySelector('[data-js="counter1"]');
textArea1.addEventListener("input", updateCharCount);


function updateCharCount() {
  const maxLength = textArea1.getAttribute("maxlength");
  const currentLength = textArea1.value.length;
  charCountElement.textContent = `${maxLength - currentLength} characters left`;
}

/* Data Form */

const form = document.querySelector('[data-js=form]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
});

/* new Card */
const mainSection = document.querySelector('[data-js="main-element"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  

  const newCard = document.createElement("div");
  newCard.innerHTML += `
    <article class="card border-btm">
      <div class="question">
        <button class="icon-button" data-js="bookmark1">
          <i class="fa-solid fa-bookmark question__bookmark"></i>
        </button>
        <h2>
          Question: ${data.question}?
        </h2>
      </div>
      <div class="answer">
        <button class="answer__btn" data-js="show-answer1-button">
          Show the answer
        </button>
        <h3 class="hide" data-js="show-answer1">${data.answer}</h3>
        <div class="tags-container">
          <p class="tag">#${data.tags}</p>
        </div>
      </div>
    </article>
  `;

  
    mainSection.appendChild(newCard);
  
form.reset()

});

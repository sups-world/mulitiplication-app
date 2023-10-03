const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionElement = document.getElementById("question");
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

const clrBtnElement = document.getElementById("clear-local-storage");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scoreElement.innerText = `Score: ${score}`;

questionElement.innerText = `What is ${num1} multiplied by ${num2} ?`;

const correctAns = num1 * num2;

formElement.addEventListener("submit", () => {
  console.log("this is input", inputElement);
  //   console.log("this is score", score);
  //   type change to integer using +
  let userAns = +inputElement.value;
  if (userAns === correctAns) {
    score = score + 1;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

clrBtnElement.addEventListener("click", () => {
  localStorage.clear();
  score = 0;
  scoreElement.innerText = `Score: ${score}`;

  return;
});

function updateLocalStorage() {
  // localstorage takes strings only
  localStorage.setItem("score", JSON.stringify(score));
}

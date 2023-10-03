const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionElement = document.getElementById("question");
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
let score = 0;

questionElement.innerText = `What is ${num1} multiplied by ${num2} ?`;

const correctAns = num1 * num2;

formElement.addEventListener("submit", () => {
  console.log("this is input", inputElement);
  console.log("this is score", score);
  //   type change to integer using +
  let userAns = +inputElement.value;
  if (userAns === correctAns) {
    score = score + 1;
    console.log("here::", score);
  } else {
    score = score - 1;
    console.log("here n", score);
  }
});

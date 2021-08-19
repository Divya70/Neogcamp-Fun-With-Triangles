const quizForm = document.querySelectorAll(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswer = ["90°", "right angled"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
}

submitAnswerBtn.addEventListener("click", calculateScore);
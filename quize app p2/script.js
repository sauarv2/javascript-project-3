// Array containing quiz data: questions, multiple-choice options, and the correct answer
const quizData = [
  {
    question: "Which language runs in a web browser?", // Question text
    a: "Java", // Option a
    b: "C", // Option b
    c: "Python", // Option c
    d: "JavaScript", // Option d
    correct: "d", // Correct option
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

// Select HTML elements for interaction
const quiz = document.getElementById("quiz"); // Container for the quiz
const answerEls = document.querySelectorAll(".answer"); // Radio buttons for answers
const questionEl = document.getElementById("question"); // Element for displaying the question
const a_text = document.getElementById("a_text"); // Element for displaying option a
const b_text = document.getElementById("b_text"); // Element for displaying option b
const c_text = document.getElementById("c_text"); // Element for displaying option c
const d_text = document.getElementById("d_text"); // Element for displaying option d
const submitBtn = document.getElementById("submit"); // Submit button

// Initialize current quiz question index and score
let currentQuiz = 0;
let score = 0;

// Load the first quiz question
loadQuiz();

function loadQuiz() {
  // Deselect previously selected answer
  deselectAnswers();

  // Get the current quiz data
  const currentQuizData = quizData[currentQuiz];

  // Populate the question and options in the UI
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  // Uncheck all answer radio buttons
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  // Get the selected answer
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id; // Store the ID of the checked radio button
    }
  });

  return answer; // Return the selected answer's ID
}

// Add click event listener to the submit button
submitBtn.addEventListener("click", () => {
  // Get the selected answer
  const answer = getSelected();

  // Check if an answer is selected
  if (answer) {
    // Increase score if the answer is correct
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    // Move to the next question
    currentQuiz++;

    // Load next question or display the final score
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // Display final score and reload button
      quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});

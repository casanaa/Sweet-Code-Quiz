
    const questions = [
{
    question: "Commonly used data types DO NOT INCLUDE:",
    choices: ["Strings", "Monkey Poo", "Alerts", "Bat Signals"],
    correctAnswer: "Bat Signals"
}, 
{
    question: "The condition in an if / else statement is enclosed within ________?",
    choices: ["Flowers", "Cement", "Parenthesis", "These 4 Walls"],
    correctAnswer: "Parenthesis"
},
{
    question: "Arrays in JavaScript can be used to store __________?",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
    correctAnswer: "All of the above"
}, 
{
    question: "String values must be enclosed within ________ when being assigned to variables.",
    choices: ["A ball of yarn", "My Shoe", "Quotes", "Spider Man's web shooter"],
    correctAnswer: "Quotes"
},
{
    question: "What team is the BESt NFL team out there?",
    choices: ["KC Chiefs", "KC Chiefs", "KC CHIEFS", "All of the above"],
    correctAnswer: "All of the above"
}];

   let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";

    question.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choice) {
    const question = questions[currentQuestion];
    if (choice === question.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz Completed!";
    choicesElement.style.display = "none";
    resultContainer.textContent = `You scored ${score} out of ${questions.length} questions.`;
    resultContainer.style.display = "block";
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        showQuestion();
    }
});

showQuestion();
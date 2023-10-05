const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the capital of France?",
        choice1: "Madrid",
        choice2: "Berlin",
        choice3: "Paris",
        choice4: "Rome",
        answer: 3
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        choice1: "Mars",
        choice2: "Venus",
        choice3: "Jupiter",
        choice4: "Saturn",
        answer: 1
    },
    {
        question: "What is the largest mammal in Earth?",
        choice1: "Elephant",
        choice2: "Blue Whale",
        choice3: "Giraffe",
        choice4: "Hippopotamus",
        answer: 2
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        choice1: "Carbon Monoxide",
        choice2: "Nitrogen",
        choice3: "Oxygen",
        choice4: "Carbon Dioxide",
        answer: 4
    },
    {
        question: "What is the chemical symbol for gold?",
        choice1: "Ag",
        choice2: "Au",
        choice3: "Fe",
        choice4: "Cu",
        answer: 2
    },
    {
        question: "which famous scientis formulated the theory of relativity",
        choice1: "Isaac Newton",
        choice2: "Galileo Galiler",
        choice3: "Stephen Hawking",
        choice4: "Albert Einstein",
        answer: 4
    },
    {
        question: "Which programming language is often used for web develpment?",
        choice1: "Python",
        choice2: "Java",
        choice3: "JavaScript",
        choice4: "C++",
        answer: 3
    },
    {
        question: "What is the largest planet in our solar System?",
        choice1: "Earth",
        choice2: "Mars",
        choice3: "Jupiter",
        choice4: "Saturn",
        answer: 3
    },
    {
        question: "Which famous playwright wrote 'Romeo and Juliet'",
        choice1: "Charles Dickens",
        choice2: "William Shakespeare",
        choice3: "Jane Austen",
        choice4: "Leo Tolstoy",
        answer: 2
    },
    {
        question: "What is the chemical symbol for water?",
        choice1: "H2O",
        choice2: "CO2",
        choice3: "O2",
        choice4: "NaCl",
        answer: 1
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        choice1: "Oxygen",
        choice2: "Nitrogen",
        choice3: "Carbon Dioxide",
        choice4: "Argon",
        answer: 2
    },
    {
        question: "What is the largest organ in the human body?",
        choice1: "Heart",
        choice2: "Brain",
        choice3: "Skin",
        choice4: "Liver",
        answer: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        choice1: "Pablo Picasso",
        choice2: "Leonardo da Vinci",
        choice3: "Vincent van Gogh",
        choice4: "Michelangelo",
        answer: 2
    },
    {
        question: "What is the smallest prime number?",
        choice1: "0",
        choice2: "1",
        choice3: "2",
        choice4: "3",
        answer: 3
    },
    {
        question: "Which of the following is a programming paradigm?",
        choice1: "Pop music",
        choice2: "Object-Oriented Programming",
        choice3: "Astronomy",
        choice4: "Cooking",
        answer: 2
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        choice1: "Venus",
        choice2: "Mars",
        choice3: "Jupiter",
        choice4: "Saturn",
        answer: 1
    },
    {
        question: "What is the chemical symbol for oxygen?",
        choice1: "O2",
        choice2: "H2O",
        choice3: "O3",
        choice4: "CO2",
        answer: 1
    },
    {
        question: "In computer science, what does 'HTML' stand for?",
        choice1: "HyperText Markup Language",
        choice2: "High-Level Technical Markup Language",
        choice3: "Human-Tested Markup Language",
        choice4: "Hyperlink and Text Markup Language",
        answer: 1
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choice1: "China",
        choice2: "South Korea",
        choice3: "Japan",
        choice4: "Thailand",
        answer: 3
    },
    {
        question: "What is the largest desert in the world?",
        choice1: "Sahara Desert",
        choice2: "Gobi Desert",
        choice3: "Arctic Desert",
        choice4: "Atacama Desert",
        answer: 1
    }
];

//Constants

const correctBonus = 10;
const maxQuestions = 5;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
       return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptAnswer = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToAplly = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        selectedChoice.parentElement.classList.add(classToAplly);
        console.log(classToAplly);
        getNewQuestion();
    });
});
startGame();
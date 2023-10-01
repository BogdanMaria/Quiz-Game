const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptAnswer = true;
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
    answer:4
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
]
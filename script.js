const quizData = [
    {
        question: "Qual é o símbolo químico do hidrogênio?",
        choices: ["H", "He", "Ho", "Hg"],
        answer: "H"
    },
    {
        question: "Qual é o número atômico do oxigênio?",
        choices: ["6", "8", "10", "12"],
        answer: "8"
    },
    {
        question: "Qual é o elemento mais leve da Tabela Periódica?",
        choices: ["Hidrogênio", "Lítio", "Hélio", "Carbono"],
        answer: "Hidrogênio"
    },
    {
        question: "Qual é o elemento mais abundante no universo?",
        choices: ["Oxigênio", "Hélio", "Carbono", "Hidrogênio"],
        answer: "Hidrogênio"
    },
    {
        question: "Qual é o elemento que tem o maior número atômico natural?",
        choices: ["Urânio", "Tório", "Plutônio", "Ogânio"],
        answer: "Urânio"
    },
    {
        question: "Qual é o símbolo químico do ouro?",
        choices: ["Ag", "Au", "At", "O"],
        answer: "Au"
    },
    {
        question: "Quantos elementos químicos existem na Tabela Periódica atualmente?",
        choices: ["118", "92", "100", "110"],
        answer: "118"
    },
    {
        question: "Qual é o único metal líquido à temperatura ambiente?",
        choices: ["Mercúrio", "Césio", "Gálio", "Bário"],
        answer: "Mercúrio"
    },
    {
        question: "Qual é o elemento químico com o símbolo Fe?",
        choices: ["Ferro", "Fósforo", "Flúor", "Fermium"],
        answer: "Ferro"
    },
    {
        question: "Qual é o gás mais abundante na atmosfera terrestre?",
        choices: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hélio"],
        answer: "Nitrogênio"
    },
    {
        question: "Qual é o elemento químico que tem o símbolo S?",
        choices: ["Enxofre", "Sódio", "Sílica", "Silício"],
        answer: "Enxofre"
    },
    {
        question: "Qual é o elemento que é essencial para a formação dos ossos?",
        choices: ["Ferro", "Magnésio", "Cálcio", "Potássio"],
        answer: "Cálcio"
    }
];

const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;
let quizCompleted = false;

function startQuiz() {
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            if (!quizCompleted) {
                checkAnswer(choice);
            }
        });
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choice) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
        score++;
        resultElement.textContent = "Resposta correta!";
    } else {
        resultElement.textContent = "Resposta errada.";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizCompleted = true;
    quiz.innerHTML = `<h2>Quiz concluído!</h2>
                      <p>Você acertou ${score} de ${quizData.length} questões.</p>`;
    resultElement.textContent = "";
    submitButton.style.display = 'none';
}

submitButton.addEventListener('click', () => {
    const selectedButton = choicesElement.querySelector('.selected');
    if (selectedButton && !quizCompleted) {
        const choiceText = selectedButton.textContent;
        checkAnswer(choiceText);
    }
});

document.addEventListener('DOMContentLoaded', startQuiz);

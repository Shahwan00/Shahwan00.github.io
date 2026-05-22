const quizData = [
    { audio: "audio/a.mp3", correct: "أ" },
    { audio: "audio/b.mp3", correct: "ب" },
    { audio: "audio/t.mp3", correct: "ت" }
];

let currentQuestionIndex = 0;
let score = 0;
const audioPlayer = document.getElementById("audio-player");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

function loadQuestion() {
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";

    let currentQuestion = quizData[currentQuestionIndex];
    audioPlayer.src = currentQuestion.audio;

    let options = [currentQuestion.correct];
    
    while (options.length < quizData.length) {
        let randomWord = quizData[Math.floor(Math.random() * quizData.length)].correct;
        if (!options.includes(randomWord)) {
            options.push(randomWord);
        }
    }

    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.onclick = () => checkAnswer(button, option, currentQuestion.correct);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(button, selected, correct) {
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons.forEach(btn => {
            if (btn.innerText === correct) {
                btn.classList.add("correct");
            }
        });
    }
    nextButton.style.display = "block";
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    scoreContainer.innerHTML = `<h3>انتهى الاختبار!</h3><p>درجتك هي: ${score} من ${quizData.length}</p>`;
    scoreContainer.style.display = "block";
}

// تشغيل السؤال الأول عند تحميل الصفحة
loadQuestion();

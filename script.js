// مصفوفة البيانات: هنا نضع الحروف الإيزيدية ونطقها واسم ملف الصوت الخاص بها
const quizData = [
    { id: 1, char: "𐺀", answer: "ألف", audio: "audio/alif.mp3" },
    { id: 2, char: "𐺁", answer: "باء", audio: "audio/baa.mp3" },
    { id: 3, char: "𐺂", answer: "تـاء", audio: "audio/taa.mp3" }
    // تستطيع إضافة كل الحروف الأبجدية هنا لاحقاً بنفس الطريقة
];

let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;

const charDisplay = document.getElementById("char-display");
const optionsContainer = document.getElementById("options-container");
const listenBtn = document.getElementById("listen-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    selectedAnswer = null;
    nextBtn.disabled = true;
    nextBtn.innerText = "تحقق من الإجابة";
    
    let currentQuestion = quizData[currentQuestionIndex];
    charDisplay.innerText = currentQuestion.char;
    
    // تحديث شريط التقدم
    let progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // توليد خيارات (الإجابة الصحيحة + خيارات عشوائية)
    let options = [currentQuestion.answer];
    while(options.length < 4) {
        let randomChar = quizData[Math.floor(Math.random() * quizData.length)].answer;
        if(!options.includes(randomChar)) {
            options.push(randomChar);
        }
    }
    // خلط الخيارات عشوائياً
    options.sort(() => Math.random() - 0.5);

    // عرض الخيارات في الواجهة
    optionsContainer.innerHTML = "";
    options.forEach(opt => {
        const card = document.createElement("div");
        card.className = "option-card";
        card.innerText = opt;
        card.onclick = () => selectOption(card, opt);
        optionsContainer.appendChild(card);
    });
}

function selectOption(card, option) {
    // إزالة التحديد عن الباقي
    document.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
    // تحديد الكرت الحالي
    card.classList.add("selected");
    selectedAnswer = option;
    nextBtn.disabled = false; // تفعيل زر التحقق
}

// تشغيل الصوت عند الضغط على زر الاستماع
listenBtn.onclick = () => {
    let currentQuestion = quizData[currentQuestionIndex];
    let audio = new Audio(currentQuestion.audio);
    audio.play().catch(e => console.log("خطأ في تشغيل الصوت: تأكد من رفع الملف داخل مجلد audio وباسم صحيح"));
};

// عند الضغط على زر التحقق / التالي
nextBtn.onclick = () => {
    let currentQuestion = quizData[currentQuestionIndex];
    
    if (nextBtn.innerText === "تحقق من الإجابة") {
        if (selectedAnswer === currentQuestion.answer) {
            score += 10;
            scoreDisplay.innerText = score;
            alert("إجابة صحيحة! 🎉");
        } else {
            alert(`إجابة خاطئة! الإجابة الصحيحة هي: ${currentQuestion.answer} ❌`);
        }
        nextBtn.innerText = "الحرف التالي ➔";
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            progressBar.style.width = "100%";
            alert(`أحسنت! أنهيت الكويز بنجاح. مجموع نقاطك: ${score} ⭐`);
            currentQuestionIndex = 0;
            score = 0;
            scoreDisplay.innerText = score;
            loadQuestion();
        }
    }
};

// تشغيل السؤال الأول عند فتح الصفحة
loadQuestion();

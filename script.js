// 1. قاعدة بيانات الحروف (الرمز اليزيدي، الترجمة بالكورمانجية والعربية، واسم ملف الصوت)
const lettersData = [
    { yezidi: "𐺀", kurmanji: "A", arabic: "ألف", audio: "audio/letter_a.mp3" },
    { yezidi: "𐺁", kurmanji: "B", arabic: "باء", audio: "audio/letter_b.mp3" },
    { yezidi: "𐺂", kurmanji: "C", arabic: "جيم", audio: "audio/letter_c.mp3" },
    { yezidi: "𐺃", kurmanji: "Ç", arabic: "تشاء", audio: "audio/letter_ch.mp3" }
  { yezidi: "ا", kurmanji: "A", arabic: "ألف", audio: "audio/letter_a.mp3" },
    { yezidi: "𐺁", kurmanji: "B", arabic: "باء", audio: "audio/letter_b.mp3" },
    { yezidi: "𐺂", kurmanji: "C", arabic: "جيم", audio: "audio/letter_c.mp3" },
    { yezidi: "𐺃", kurmanji: "Ç", arabic: "تشاء", audio: "audio/letter_ch.mp3" }
    // يمكنك إضافة باقي الحروف هنا بنفس الترتيب
];

// 2. قاعدة بيانات الكلمات
const wordsData = [
    { yezidi: "𐺀𐺁", kurmanji: "Av", arabic: "ماء", audio: "audio/word_av.mp3" },
    { yezidi: "𐺃𐺁", kurmanji: "Çav", arabic: "عين", audio: "audio/word_chav.mp3" },
    { yezidi: "𐺁𐺀𐺁", kurmanji: "Bav", arabic: "أب", audio: "audio/word_bav.mp3" }
    // يمكنك إضافة باقي الكلمات هنا بنفس الترتيب
];

// المتغيرات الخاصة بالاختبار
let currentQuestionIndex = 0;
let score = 0;

// تشغيل الدالة عند تحميل الصفحة لبناء واجهة الحروف
document.addEventListener("DOMContentLoaded", () => {
    renderLetters();
});

// وظيفة تشغيل الصوت الموحدة
function playSound(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play().catch(err => console.log("ملف الصوت غير موجود بعد: ", audioSrc));
}

// عرض الحروف في الصفحة
function renderLetters() {
    const grid = document.getElementById("letters-grid");
    grid.innerHTML = "";
    lettersData.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => playSound(item.audio);
        
        card.innerHTML = `
            <div class="yezidi-text">${item.yezidi}</div>
            <div class="translation">${item.kurmanji} / ${item.arabic}</div>
        `;
        grid.appendChild(card);
    });
}

// الانتقال إلى مرحلة الكلمات
function goToWords() {
    document.getElementById("letters-section").classList.remove("active");
    document.getElementById("words-section").classList.add("active");
    renderWords();
}

// عرض الكلمات في الصفحة
function renderWords() {
    const grid = document.getElementById("words-grid");
    grid.innerHTML = "";
    wordsData.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => playSound(item.audio);
        
        card.innerHTML = `
            <div class="yezidi-text">${item.yezidi}</div>
            <div class="translation">${item.kurmanji} (${item.arabic})</div>
        `;
        grid.appendChild(card);
    });
}

// الانتقال إلى مرحلة الاختبار
function goToQuiz() {
    document.getElementById("words-section").classList.remove("active");
    document.getElementById("quiz-section").classList.add("active");
    loadQuestion();
}

// تحميل سؤال الاختبار
function loadQuestion() {
    const questionText = document.getElementById("quiz-question");
    const wordDisplay = document.getElementById("quiz-word");
    const optionsGrid = document.getElementById("quiz-options");
    const resultDiv = document.getElementById("quiz-result");

    resultDiv.innerHTML = "";
    optionsGrid.innerHTML = "";

    if (currentQuestionIndex >= wordsData.length) {
        questionText.innerHTML = "أحسنت! لقد أكملت الاختبار بنجاح.";
        wordDisplay.innerHTML = `النتيجة: ${score} من ${wordsData.length}`;
        return;
    }

    const currentWord = wordsData[currentQuestionIndex];
    questionText.innerHTML = "ما معنى هذه الكلمة؟";
    wordDisplay.innerHTML = currentWord.yezidi;

    // تشغيل صوت الكلمة تلقائياً عند ظهور السؤال بمثابة مساعدة
    playSound(currentWord.audio);

    // إنشاء خيارات الإجابة (الإجابة الصحيحة + خيارات عشوائية خاطئة)
    let options = [currentWord.arabic];
    
    // جلب خيارات خاطئة من الكلمات الأخرى لتنويع الاختبار
    wordsData.forEach(w => {
        if (w.arabic !== currentWord.arabic && options.length < 4) {
            options.push(w.arabic);
        }
    });

    // خلط الخيارات عشوائياً ليصبح الاختبار حقيقياً
    options.sort(() => Math.random() - 0.5);

    // عرض أزرار الخيارات
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option, currentWord.arabic);
        optionsGrid.appendChild(btn);
    });
}

// التحقق من الإجابة
function checkAnswer(selected, correct) {
    const resultDiv = document.getElementById("quiz-result");
    if (selected === correct) {
        resultDiv.innerHTML = "<span style='color: #2ecc71;'>إجابة صحيحة! أحسنت.</span>";
        score++;
    } else {
        resultDiv.innerHTML = `<span style='color: #e74c3c;'>إجابة خاطئة. الإجابة الصحيحة هي: ${correct}</span>`;
    }

    // الانتقال للسؤال التالي بعد ثانيتين لقراءة النتيجة
    currentQuestionIndex++;
    setTimeout(loadQuestion, 2000);
}

// مصفوفة الأسئلة (تأكد من وجود الملفات داخل مجلد audio بنفس الأسماء)
const questions = [
    {
        char: "𐺀", // مثال لحرف إيزيدي
        options: ["أ", "ب", "ت", "ث"],
        answer: "أ",
        audio: "audio/a.mp3"
    },

{
    char: "𐺂",
    options: ["أ", "ب", "ت", "ث"],
    answer: "ڀ",
    audio: "audio/c.mp3"
},
{
    char: "𐺃",
    options: ["أ", "ب", "ت", "ث"],
    answer: "پ",
    audio: "audio/d.mp3"
},
{
    char: "𐺄",
    options: ["أ", "ب", "ت", "ث"],
    answer: "ت",
    audio: "audio/e.mp3"
},
{
    char: "𐺅",
    options: ["أ", "ب", "ت", "ث"],
    answer: "ز",
    audio: "audio/f.mp3"
},
{
    char: "𐺆",
    options: ["أ", "ب", "ت", "ث"],
    answer: "ج",
    audio: "audio/g.mp3"
},
{
    char: "𐺇",
    options: ["أ", "ب", "ت", "ث"],
    answer: "چ",
    audio: "audio/h.mp3"
}



    
    {
        char: "𐺁", 
        options: ["أ", "ب", "ت", "ث"],
        answer: "ب",
        audio: "audio/b.mp3"
    }
    // يمكنك إضافة باقي الحروف هنا بنفس الطريقة
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

// استدعاء عناصر HTML
const charDisplay = document.getElementById("char-display");
const optionsContainer = document.getElementById("options-container");
const listenBtn = document.getElementById("listen-btn");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");
const progressFill = document.getElementById("progress");
const audioPlayer = document.getElementById("audio-player");

// دالة بدء وعرض السؤال
function loadQuestion() {
    selectedOption = null;
    nextBtn.disabled = true;
    nextBtn.innerText = "تحقق من الإجابة";
    optionsContainer.innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    charDisplay.innerText = currentQuestion.char;

    // تحديث شريط التقدم
    let progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    // إنشاء أزرار الخيارات
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.innerText = option;
        button.onclick = () => selectOption(button, option);
        optionsContainer.appendChild(button);
    });
}

// دالة اختيار إجابة
function selectOption(button, option) {
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.classList.remove("selected"));
    
    button.classList.add("selected");
    selectedOption = option;
    nextBtn.disabled = false;
}

// تشغيل الصوت عند الضغط على زر الاستماع
listenBtn.onclick = () => {
    let currentQuestion = questions[currentQuestionIndex];
    
    if (currentQuestion && currentQuestion.audio) {
        // نربط مصدر الصوت بالملف المطلوب
        audioPlayer.src = currentQuestion.audio;
        
        // تشغيل الصوت ومسك الخطأ إن وجد
        audioPlayer.play().catch(error => {
            console.error("خطأ في تشغيل الصوت:", error);
            alert("تعذر تشغيل الصوت. تأكد من مسار الملف واسمه في مجلد audio");
        });
    }
};

// زر التحقق والانتقال للسؤال التالي
nextBtn.onclick = () => {
    let currentQuestion = questions[currentQuestionIndex];

    if (nextBtn.innerText === "تحقق من الإجابة") {
        const buttons = document.querySelectorAll(".option-btn");
        
        buttons.forEach(btn => {
            if (btn.innerText === currentQuestion.answer) {
                btn.classList.add("correct");
            }
            if (btn.classList.contains("selected") && btn.innerText !== currentQuestion.answer) {
                btn.classList.add("wrong");
            }
        });

        if (selectedOption === currentQuestion.answer) {
            score += 10;
            scoreDisplay.innerText = score;
        }

        nextBtn.innerText = "السؤال التالي";
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            // نهاية الاختبار
            progressFill.style.width = "100%";
            charDisplay.innerText = "🎉";
            optionsContainer.innerHTML = `<h3>أحسنت! أكملت الاختبار بنتيجة: ${score}</h3>`;
            listenBtn.style.display = "none";
            nextBtn.style.display = "none";
        }
    }
};

// تشغيل أول سؤال عند تحميل الصفحة
window.onload = loadQuestion;

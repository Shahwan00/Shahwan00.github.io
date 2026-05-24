// 1. قاعدة بيانات الحروف (الرمز اليزيدي، الترجمة بالكورمانجية والعربية، واسم ملف الصوت)
const lettersData = [
    { yezidi: "𐺀", kurmanji: "A", arabic: "ألف", audio: "audio/a.mp3" }, 
    { yezidi: "𐺁", kurmanji: "B", arabic: "باء", audio: "audio/b.mp3" }, 
    { yezidi: "𐺃", kurmanji: "P", arabic: "پاء", audio: "audio/p.mp3" }, 
    { yezidi: "𐺂", kurmanji: "Ph", arabic: "باء انفجارية", audio: "audio/ph.mp3" },
    { yezidi: "𐺄", kurmanji: "T'", arabic: "تاء", audio: "audio/t.mp3" },
    { yezidi: "𐺅", kurmanji: "S", arabic: "ثاء", audio: "audio/s.mp3" },
    { yezidi: "𐺆", kurmanji: "C", arabic: "جيم", audio: "audio/j.mp3" },
    { yezidi: "𐺇", kurmanji: "Ch", arabic: "تشاء", audio: "audio/ch.mp3" },
    { yezidi: "𐺈", kurmanji: "C'", arabic: "تشاء مشددة", audio: "audio/ch_alt.mp3" },
    { yezidi: "𐺉", kurmanji: "H'", arabic: "حاء", audio: "audio/h.mp3" },
    { yezidi: "𐺊", kurmanji: "X", arabic: "خاء", audio: "audio/x.mp3" },
    { yezidi: "𐺋", kurmanji: "D", arabic: "دال", audio: "audio/d.mp3" },
    { yezidi: "𐺏", kurmanji: "Z", arabic: "ذال", audio: "audio/z.mp3" },
    { yezidi: "𐺍", kurmanji: "R", arabic: "راء مخففة", audio: "audio/r.mp3" },
    { yezidi: "𐺎", kurmanji: "R'", arabic: "راء مفخمة", audio: "audio/rh.mp3" },
    { yezidi: "𐺐", kurmanji: "J", arabic: "جيم خفيفة (ژ)", audio: "audio/je.mp3" },
    { yezidi: "𐺑", kurmanji: "S", arabic: "سين", audio: "audio/sin.mp3" },
    { yezidi: "𐺒", kurmanji: "Sh", arabic: "شين", audio: "audio/sh.mp3" },
    { yezidi: "𐺕", kurmanji: "T", arabic: "طاء", audio: "audio/ta.mp3" },
    { yezidi: "𐺖", kurmanji: "Z'", arabic: "ظاء", audio: "audio/ze.mp3" },
    { yezidi: "𐺗", kurmanji: "E'", arabic: "عين", audio: "audio/eyn.mp3" },
    { yezidi: "𐺘", kurmanji: "X'", arabic: "غين", audio: "audio/xheyn.mp3" },
    { yezidi: "𐺙", kurmanji: "F", arabic: "فاء", audio: "audio/f.mp3" },
    { yezidi: "𐺚", kurmanji: "V", arabic: "ڤاء", audio: "audio/v.mp3" },
    { yezidi: "𐺛", kurmanji: "V", arabic: "واو / ڤ (شكل بديل)", audio: "audio/v_alt.mp3" },
    { yezidi: "𐺜", kurmanji: "Q", arabic: "قاف", audio: "audio/q.mp3" },
    { yezidi: "𐺝", kurmanji: "K", arabic: "كاف", audio: "audio/k.mp3" },
    { yezidi: "𐺞", kurmanji: "Kh'", arabic: "كاف مشددة", audio: "audio/kh.mp3" },
    { yezidi: "𐺟", kurmanji: "G", arabic: "كاف مصرية (گ)", audio: "audio/g.mp3" },
    { yezidi: "𐺠", kurmanji: "L", arabic: "لام", audio: "audio/l.mp3" },
    { yezidi: "𐺡", kurmanji: "M", arabic: "ميم", audio: "audio/m.mp3" },
    { yezidi: "𐺢", kurmanji: "N", arabic: "نون", audio: "audio/n.mp3" },
    { yezidi: "𐺣", kurmanji: "U", arabic: "واو قصيرة / ضمة", audio: "audio/u.mp3" },
    { yezidi: "𐺤", kurmanji: "Û", arabic: "واو ممدودة", audio: "audio/uu.mp3" },
    { yezidi: "𐺥", kurmanji: "W", arabic: "واو (W)", audio: "audio/w.mp3" },
    { yezidi: "𐺦", kurmanji: "O", arabic: "واو تفخيم (O)", audio: "audio/o.mp3" },
    { yezidi: "𐺧", kurmanji: "E", arabic: "فتحة / ألف قصيرة", audio: "audio/e.mp3" },
    { yezidi: "𐺨", kurmanji: "H", arabic: "هاء", audio: "audio/ha.mp3" },
    { yezidi: "𐺩", kurmanji: "Y", arabic: "ياء", audio: "audio/y.mp3" },
    { yezidi: "𐺰", kurmanji: "Ł", arabic: "لام مفخمة (تاريخية)", audio: "audio/lam_dot.mp3" },
    { yezidi: "𐺱", kurmanji: "Ê", arabic: "ياء بحركات تاريخية", audio: "audio/yot_circumflex.mp3" }
];

// 2. قاعدة بيانات الكلمات الأصلية (لم يتم تغييرها)
const wordsData = [
    { yezidi: "𐺀𐺁", kurmanji: "Av", arabic: "ماء", audio: "audio/word_av.mp3" },
    { yezidi: "𐺃𐺁", kurmanji: "Çav", arabic: "عين", audio: "audio/word_chav.mp3" },
    { yezidi: "𐺁𐺀𐺁", kurmanji: "Bav", arabic: "أب", audio: "audio/word_bav.mp3" }
];

// المتغيرات الخاصة بالاختبار الأكاديمي
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

// دالة عامة لإخفاء جميع الأقسام وإظهار القسم المطلوب فقط
function switchSection(targetSectionId) {
    const sections = ["main-section", "letters-section", "words-section", "quiz-section", "info-section", "errors-section"];
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove("active");
        }
    });
    
    const target = document.getElementById(targetSectionId);
    if (target) {
        target.classList.add("active");
    }
}

// أزرار التنقل الأساسية
function goToHome() {
    switchSection("main-section"); // الصفحة الرئيسية (المترجم)
}

function goToLetters() {
    switchSection("letters-section");
    renderLetters();
}

function goToWords() {
    switchSection("words-section");
    renderWords();
}

function goToQuiz() {
    switchSection("quiz-section");
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function goToErrors() {
    switchSection("errors-section");
}

// دالة لعرض معلومات التطبيق عند الضغط على "معلومات" في القائمة
function showAppInfo() {
    switchSection("info-section");
}

// عرض الحروف في الصفحة
function renderLetters() {
    const grid = document.getElementById("letters-grid");
    if (!grid) return;
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

// عرض الكلمات في الصفحة
function renderWords() {
    const grid = document.getElementById("words-grid");
    if (!grid) return;
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

// تحميل سؤال الاختبار
function loadQuestion() {
    const questionText = document.getElementById("quiz-question");
    const wordDisplay = document.getElementById("quiz-word");
    const optionsGrid = document.getElementById("quiz-options");
    const resultDiv = document.getElementById("quiz-result");

    if (!questionText || !wordDisplay || !optionsGrid || !resultDiv) return;

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

    playSound(currentWord.audio);

    let options = [currentWord.arabic];
    
    wordsData.forEach(w => {
        if (w.arabic !== currentWord.arabic && options.length < 4) {
            options.push(w.arabic);
        }
    });

    options.sort(() => Math.random() - 0.5);

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
    if (!resultDiv) return;

    if (selected === correct) {
        resultDiv.innerHTML = "<span style='color: #2ecc71;'>إجابة صحيحة! أحسنت.</span>";
        score++;
    } else {
        resultDiv.innerHTML = `<span style='color: #e74c3c;'>إجابة خاطئة. الإجابة الصحيحة هي: ${correct}</span>`;
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 2000);
}

// دالة فتح وإغلاق القائمة الجانبية
function toggleSidebar(open) {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
        sidebar.style.width = open ? "280px" : "0"; // تفتح بعرض 280 بكسل وتغلق إلى صفر
    }
}

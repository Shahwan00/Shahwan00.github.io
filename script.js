// 1. قاعدة بيانات الحروف (الرمز اليزيدي، الترجمة بالكورمانجية والعربية، واسم ملف الصوت)
   const lettersData = [
  { yezidi: "𐺀", kurmanji: "A", arabic: "ألف", audio: "audio/letter_a.mp3" },
  { yezidi: "𐺁", kurmanji: "B", arabic: "باء", audio: "audio/letter_b.mp3" },
  { yezidi: "𐺂", kurmanji: "P", arabic: "پاء", audio: "audio/letter_p.mp3" },
  { yezidi: "𐺃", kurmanji: "Ph", arabic: "باء انفجارية", audio: "audio/letter_ph.mp3" },
  { yezidi: "𐺄", kurmanji: "T'", arabic: "تاء", audio: "audio/letter_t.mp3" },
  { yezidi: "𐺅", kurmanji: "S", arabic: "ثاء", audio: "audio/letter_s.mp3" },
  { yezidi: "𐺆", kurmanji: "C", arabic: "جيم", audio: "audio/letter_c.mp3" },
  { yezidi: "𐺇", kurmanji: "Ch", arabic: "تشاء", audio: "audio/letter_ch.mp3" },
  { yezidi: "𐺈", kurmanji: "C'", arabic: "تشاء مشددة", audio: "audio/letter_ch_alt.mp3" },
  { yezidi: "𐺉", kurmanji: "H'", arabic: "حاء", audio: "audio/letter_h.mp3" },
  { yezidi: "𐺊", kurmanji: "X", arabic: "خاء", audio: "audio/letter_x.mp3" },
  { yezidi: "𐺋", kurmanji: "D", arabic: "دال", audio: "audio/letter_d.mp3" },
  { yezidi: "𐺌", kurmanji: "Z", arabic: "ذال", audio: "audio/letter_z.mp3" },
  { yezidi: "𐺍", kurmanji: "R", arabic: "راء مخففة", audio: "audio/letter_r.mp3" },
  { yezidi: "𐺎", kurmanji: "R'", arabic: "راء مفخمة", audio: "audio/letter_rh.mp3" },
  { yezidi: "𐺏", kurmanji: "Z", arabic: "زاء", audio: "audio/letter_za.mp3" },
  { yezidi: "𐺐", kurmanji: "J", arabic: "جيم خفيفة (ژ)", audio: "audio/letter_j.mp3" },
  { yezidi: "𐺑", kurmanji: "S", arabic: "سين", audio: "audio/letter_sin.mp3" },
  { yezidi: "𐺒", kurmanji: "Sh", arabic: "شين", audio: "audio/letter_sh.mp3" },
  { yezidi: "𐺓", kurmanji: "S'", arabic: "صاد", audio: "audio/letter_sad.mp3" },
  { yezidi: "𐺔", kurmanji: "D", arabic: "ضاد", audio: "audio/letter_dad.mp3" },
  { yezidi: "𐺕", kurmanji: "T", arabic: "طاء", audio: "audio/letter_ta.mp3" },
  { yezidi: "𐺖", kurmanji: "Z'", arabic: "ظاء", audio: "audio/letter_ze.mp3" },
  { yezidi: "𐺗", kurmanji: "E'", arabic: "عين", audio: "audio/letter_eyn.mp3" },
  { yezidi: "𐺘", kurmanji: "X'", arabic: "غين", audio: "audio/letter_xheyn.mp3" },
  { yezidi: "𐺙", kurmanji: "F", arabic: "فاء", audio: "audio/letter_f.mp3" },
  { yezidi: "𐺚", kurmanji: "V", arabic: "ڤاء", audio: "audio/letter_v.mp3" },
  { yezidi: "𐺛", kurmanji: "V", arabic: "واو / ڤ (شكل بديل)", audio: "audio/letter_v_alt.mp3" },
  { yezidi: "𐺜", kurmanji: "Q", arabic: "قاف", audio: "audio/letter_q.mp3" },
  { yezidi: "𐺝", kurmanji: "K", arabic: "كاف", audio: "audio/letter_k.mp3" },
  { yezidi: "𐺞", kurmanji: "Kh'", arabic: "كاف مشددة", audio: "audio/letter_kh.mp3" },
  { yezidi: "𐺟", kurmanji: "G", arabic: "كاف مصرية (گ)", audio: "audio/letter_g.mp3" },
  { yezidi: "𐺠", kurmanji: "L", arabic: "لام", audio: "audio/letter_l.mp3" },
  { yezidi: "𐺡", kurmanji: "M", arabic: "ميم", audio: "audio/letter_m.mp3" },
  { yezidi: "𐺢", kurmanji: "N", arabic: "نون", audio: "audio/letter_n.mp3" },
  { yezidi: "𐺣", kurmanji: "U", arabic: "واو قصيرة / ضمة", audio: "audio/letter_u.mp3" },
  { yezidi: "𐺤", kurmanji: "Û", arabic: "واو ممدودة", audio: "audio/letter_uu.mp3" },
  { yezidi: "𐺥", kurmanji: "W", arabic: "واو (W)", audio: "audio/letter_w.mp3" },
  { yezidi: "𐺦", kurmanji: "O", arabic: "واو تفخيم (O)", audio: "audio/letter_o.mp3" },
  { yezidi: "𐺧", kurmanji: "E", arabic: "فتحة / ألف قصيرة", audio: "audio/letter_e.mp3" },
  { yezidi: "𐺨", kurmanji: "H", arabic: "هاء", audio: "audio/letter_ha.mp3" },
  { yezidi: "𐺩", kurmanji: "Y", arabic: "ياء", audio: "audio/letter_y.mp3" },
  { yezidi: "𐺪", kurmanji: "Ê", arabic: "ياء ممدودة", audio: "audio/letter_ee.mp3" },
  { yezidi: "𐺰", kurmanji: "Ł", arabic: "لام مفخمة (تاريخية)", audio: "audio/letter_lam_dot.mp3" },
  { yezidi: "𐺱", kurmanji: "Ê", arabic: "ياء بحركات تاريخية", audio: "audio/letter_yot_circumflex.mp3" }
];
      
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

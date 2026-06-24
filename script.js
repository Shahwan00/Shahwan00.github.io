// 1. قاعدة بيانات الحروف (الرمز اليزيدي، الترجمة بالكورمانجية والعربية، واسم ملف الصوت)
const lettersData = [
    { yezidi: "𐺀", kurmanji: "A", arabic: "ألف", audio: "audio/a.mp3" }, // تم التصحيح
    { yezidi: "𐺁", kurmanji: "B", arabic: "باء", audio: "audio/b.mp3" }, // تم التصحيح
    { yezidi: "𐺃", kurmanji: "P", arabic: "پاء", audio: "audio/p.mp3" }, // تم التصحيح
    { yezidi: "𐺂", kurmanji: "Ph", arabic: "باء انفجارية", audio: "audio/ph.mp3" },
    { yezidi: "𐺄", kurmanji: "T'", arabic: "تاء", audio: "audio/t.mp3" },
    { yezidi: "𐺫", kurmanji: "", arabic: "ء", audio: "audio/s.mp3" },
    { yezidi: "𐺆", kurmanji: "C", arabic: "جيم", audio: "audio/j.mp3" },
    { yezidi: "𐺇", kurmanji: "Ch", arabic: "تشاء", audio: "audio/ch.mp3" },
    { yezidi: "𐺈", kurmanji: "C'", arabic: "تشاء مشددة", audio: "audio/ch_alt.mp3" },
    { yezidi: "𐺧", kurmanji: "H'", arabic: "هاء", audio: "audio/h.mp3" },
    { yezidi: "𐺊", kurmanji: "X", arabic: "خاء", audio: "audio/x.mp3" },
    { yezidi: "𐺋", kurmanji: "D", arabic: "دال", audio: "audio/d.mp3" },
    { yezidi: "𐺏", kurmanji: "Z", arabic: "ذال", audio: "audio/z.mp3" },
    { yezidi: "𐺍", kurmanji: "R", arabic: "راء مخففة", audio: "audio/r.mp3" },
    { yezidi: "𐺎", kurmanji: "R'", arabic: "راء مفخمة", audio: "audio/rh.mp3" },

    { yezidi: "𐺐", kurmanji: "J", arabic: "جيم خفيفة (ژ)", audio: "audio/je.mp3" },
    { yezidi: "𐺑", kurmanji: "S", arabic: "سين", audio: "audio/sin.mp3" },
    { yezidi: "𐺒", kurmanji: "Sh", arabic: "شين", audio: "audio/sh.mp3" },


    { yezidi: "𐺕", kurmanji: "T", arabic: "طاء", audio: "audio/ta.mp3" },

    { yezidi: "𐺗", kurmanji: "A'", arabic: "عين", audio: "audio/eyn.mp3" },
    { yezidi: "𐺘", kurmanji: "X'", arabic: "غين", audio: "audio/xheyn.mp3" },
    { yezidi: "𐺙", kurmanji: "F", arabic: "فاء", audio: "audio/f.mp3" },
    { yezidi: "𐺛", kurmanji: "V", arabic: "ڤاء", audio: "audio/v.mp3" },

    { yezidi: "𐺜", kurmanji: "Q", arabic: "قاف", audio: "audio/q.mp3" },
    { yezidi: "𐺝", kurmanji: "K", arabic: "كاف", audio: "audio/k.mp3" },
    { yezidi: "𐺞", kurmanji: "Kh'", arabic: "كاف مشددة", audio: "audio/kh.mp3" },
    { yezidi: "𐺟", kurmanji: "G", arabic: "كاف مصرية (گ)", audio: "audio/g.mp3" },
    { yezidi: "𐺠", kurmanji: "L", arabic: "لام", audio: "audio/l.mp3" },
    { yezidi: "𐺡", kurmanji: "M", arabic: "ميم", audio: "audio/m.mp3" },
    { yezidi: "𐺢", kurmanji: "N", arabic: "نون", audio: "audio/n.mp3" },
    
    { yezidi: "𐺤", kurmanji: "w", arabic: "و", audio: "audio/uu.mp3" },
    { yezidi: "𐺣𐺣", kurmanji: "Ü", arabic: "وو", audio: "audio/w.mp3" },
    { yezidi: "𐺣", kurmanji: "O", arabic: "واو تفخيم (O)", audio: "audio/o.mp3" },
    { yezidi: "𐺦", kurmanji: "E", arabic: "فتحة / ألف قصيرة", audio: "audio/ea.mp3" },
    { yezidi: "𐺨", kurmanji: "yi", arabic: "ي", audio: "audio/ha.mp3" },
    { yezidi: "𐺩", kurmanji: "Y", arabic: "ياء", audio: "audio/y.mp3" },
    { yezidi: "𐺰", kurmanji: "Ł", arabic: "لام مفخمة (تاريخية)", audio: "audio/lam_dot.mp3" },
    { yezidi: "𐺱", kurmanji: "Ê", arabic: "ياء بحركات تاريخية", audio: "audio/yot_circumflex.mp3" }
];

// 2. قاعدة بيانات الكلمات (تمت إضافة 20 كلمة ألمانية وشرحها بالعربي)
const wordsData = [
    { yezidi: "𐺀𐺛", kurmanji: "", arabic: "ماء (Wasser)", audio: "audio/wasser.mp3" },
{ yezidi: "𐺋𐺀𐺞", kurmanji: "Mutter", arabic: "الأم (Mutter)", audio: "audio/word_av.mp3" },
{ yezidi: "𐺈𐺀𐺛", kurmanji: "Auge", arabic: "عين (Auge)", audio: "audio/word_chav.mp3" },
{ yezidi: "𐺁𐺀𐺁", kurmanji: "Vater", arabic: "أب (Vater)", audio: "audio/word_bav.mp3" },
{ yezidi: "𐺁𐺀𐺍𐺀𐺢", kurmanji: "Regen", arabic: "مطر (Regen)", audio: "audio/Regen.mp3" },
{ yezidi: "𐺆𐺌𐺧", kurmanji: "Ort", arabic: "مكان (Ort)", audio: "audio/Ort.mp3" },
{ yezidi: "𐺃𐺦𐺄𐺀", kurmanji: "unentschieden", arabic: "تعادل (unentschieden)", audio: "audio/unentschieden.mp3" },
{ yezidi: "𐺠𐺨𐺑𐺄𐺌𐺞", kurmanji: "Spielen", arabic: "الألعاب (Spielen)", audio: "audio/Spielen.mp3" },

{ yezidi: "𐺑𐺠𐺀𐺛", kurmanji: "Hallo", arabic: "مرحباً (Hallo)", audio: "audio/hallo.mp3" },
{ yezidi: "𐺑𐺌𐺁𐺦𐺧 𐺊𐺩𐺍", kurmanji: "Guten Morgen", arabic: "صباح الخير (Guten Morgen)", audio: "audio/guten_morgen.mp3" },
{ yezidi: "𐺐𐺌 𐺝𐺦𐺍𐺦𐺡𐺀 𐺊𐺤𐺦", kurmanji: "Bitte", arabic: "من فضلك / العفو (Bitte)", audio: "audio/bitte.mp3" },
{ yezidi: "𐺊𐺠𐺡𐺦𐺄 𐺜𐺦𐺁𐺣𐺠", kurmanji: "Danke", arabic: "شكراً (Danke)", audio: "audio/danke.mp3" },
{ yezidi: "𐺁𐺦𐺠𐺩", kurmanji: "Ja", arabic: "نعم (Ja)", audio: "audio/ja.mp3" },
{ yezidi: "𐺢𐺀", kurmanji: "Nein", arabic: "لا (Nein)", audio: "audio/nein.mp3" },
{ yezidi: "𐺢𐺀𐺢", kurmanji: "Brot", arabic: "خبز (Brot)", audio: "audio/brot.mp3" },
{ yezidi: "𐺡𐺀𐺠", kurmanji: "Haus", arabic: "منزل (Haus)", audio: "audio/haus.mp3" },
{ yezidi: "𐺄𐺦𐺍𐺦𐺡𐺃𐺩𐺠", kurmanji: "Auto", arabic: "سيارة (Auto)", audio: "audio/auto.mp3" },
{ yezidi: "𐺝𐺄𐺩𐺁", kurmanji: "Buch", arabic: "كتاب (Buch)", audio: "audio/buch.mp3" },
{ yezidi: "𐺡𐺦𐺝𐺄𐺀𐺁", kurmanji: "Schule", arabic: "مدرسة (Schule)", audio: "audio/schule.mp3" },
{ yezidi: "𐺧𐺦𐺛𐺀𐺠", kurmanji: "Freund", arabic: "صديق (Freund)", audio: "audio/freund.mp3" },
{ yezidi: "𐺡𐺀𐺁𐺀𐺄", kurmanji: "Familie", arabic: "عائلة (Familie)", audio: "audio/familie.mp3" },
{ yezidi: "𐺤𐺦𐺊𐺄", kurmanji: "Zeit", arabic: "وقت (Zeit)", audio: "audio/zeit.mp3" },
{ yezidi: "𐺍𐺣𐺐", kurmanji: "Tag", arabic: "يوم (Tag)", audio: "audio/tag.mp3" },
{ yezidi: "𐺩𐺛𐺀𐺍", kurmanji: "Nacht", arabic: "ليلة (Nacht)", audio: "audio/nacht.mp3" },
{ yezidi: "𐺒𐺨𐺍", kurmanji: "Milch", arabic: "حليب (Milch)", audio: "audio/milch.mp3" },
{ yezidi: "𐺑𐺩𐺛", kurmanji: "Apfel", arabic: "تفاحة (Apfel)", audio: "audio/apfel.mp3" },

{ yezidi: "𐺒𐺣𐺣𐺒𐺄𐺌𐺢", kurmanji: "Waschen", arabic: "غسل (Waschen)", audio: "audio/Waschen.mp3" },
{ yezidi: "𐺃𐺀𐺜𐺌𐺐𐺝𐺌𐺍𐺌𐺢", kurmanji: "Reinigen", arabic: "تنظيف (Reinigen)", audio: "audio/Reinigen.mp3" },
{ yezidi: "𐺀𐺛𐺨𐺄𐺌𐺢", kurmanji: "Werfen", arabic: "رمي (Werfen)", audio: "audio/Werfen.mp3" },
{ yezidi: "𐺟𐺦𐺧𐺩𐺒𐺄𐺌𐺢", kurmanji: "Erreichen", arabic: "الوصول (Erreichen)", audio: "audio/Erreichen.mp3" },
{ yezidi: "𐺝𐺦𐺄𐺌𐺢", kurmanji: "Fallen", arabic: "سقوط (Fallen)", audio: "audio/Fallen.mp3" },
{ yezidi: "𐺧𐺌𐺠𐺝𐺌𐺒𐺨𐺢", kurmanji: "Steigen", arabic: "الصعود (Steigen)", audio: "audio/Steigen.mp3" },
{ yezidi: "𐺋𐺀𐺝𐺦𐺄𐺌𐺢", kurmanji: "Sinken", arabic: "الهبوط (Sinken)", audio: "audio/Sinken.mp3" },
{ yezidi: "𐺟𐺦𐺍𐺨𐺢", kurmanji: "Suchen", arabic: "البحث (Suchen)", audio: "audio/Suchen.mp3" },
{ yezidi: "𐺋𐺨𐺄𐺌𐺢", kurmanji: "Finden", arabic: "العثور (Finden)", audio: "audio/Finden.mp3" },
{ yezidi: "𐺃𐺀𐺍𐺀𐺑𐺄𐺌𐺢", kurmanji: "Schützen", arabic: "حماية (Schützen)", audio: "audio/Schützen.mp3" },

{ yezidi: "𐺋𐺌𐺠", kurmanji: "Herz", arabic: "قلب (Herz)", audio: "audio/Herz.mp3" },
{ yezidi: "𐺟𐺦𐺍𐺡", kurmanji: "Heiß", arabic: "حار (Heiß)", audio: "audio/Heiß.mp3" },
{ yezidi: "𐺩𐺒", kurmanji: "Schmerz", arabic: "الم (Schmerz)", audio: "audio/Schmerz.mp3" },
{ yezidi: "𐺦𐺍𐺩", kurmanji: "Ja", arabic: "نعم (Ja)", audio: "audio/Jaa.mp3" },

{ yezidi: "𐺦𐺏 𐺁𐺌𐺍𐺇𐺨 𐺡𐺦", kurmanji: "", arabic: "أنا جوعان (Ich habe Hunger)", audio: "audio/ana_joaan.mp3" },
{ yezidi: "𐺦𐺏 𐺄𐺨 𐺡𐺦", kurmanji: "Ich habe Durst", arabic: "أنا عطشان (Ich habe Durst)", audio: "audio/ana_atshan.mp3" },
{ yezidi: "𐺊𐺦𐺤𐺀 𐺡𐺌𐺢 𐺕𐺩", kurmanji: "Ich bin schläfrig", arabic: "نعسان (Ich bin schläfrig)", audio: "audio/naasan.mp3" },


    
{ yezidi: "𐺊𐺀𐺄𐺍", kurmanji: "Tschüss", arabic: "وداعاً (Tschüss)", audio: "audio/tschuess.mp3" },
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
        questionText.innerHTML = " ​!Gut gemacht! Du hast den Test erfolgreich bestanden    أحسنت! لقد أكملت الاختبار بنجاح.";
        wordDisplay.innerHTML = ` Ergebnisse النتيجة: ${score} من Von ${wordsData.length}`;
        return;
    }

    const currentWord = wordsData[currentQuestionIndex];
    questionText.innerHTML = " ?​Was bedeutet dieses Wort ما معنى هذه الكلمة؟";
    
    // إذا لم تكن هناك كلمة يزيدي (مثل الكلمات الألمانية)، سنعرض الكلمة الألمانية نفسها في السؤال
    wordDisplay.innerHTML = currentWord.yezidi ? currentWord.yezidi : currentWord.kurmanji;

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
        resultDiv.innerHTML = "<span style='color: #2ecc71;'> !Richtige Antwort! Gut gemacht إجابة صحيحة! أحسنت.</span>";
        score++;
    } else {
        resultDiv.innerHTML = `<span style='color: #e74c3c;'> !Falsche Antwort. Die richtige Antwort ist إجابة خاطئة. الإجابة الصحيحة هي: ${correct}</span>`;
    }

    // الانتقال للسؤال التالي بعد ثانيتين لقراءة النتيجة
    currentQuestionIndex++;
    setTimeout(loadQuestion, 2000);
}

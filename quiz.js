const courseMetadata = {
    html: { label: "HTML & Semantics", color: "#f97316" },
    css: { label: "CSS & Design", color: "#2563eb" },
    javascript: { label: "JavaScript Logic", color: "#16a34a" },
    database: { label: "Database Systems", color: "#0ea5e9" },
    networking: { label: "Computer Networks", color: "#f43f5e" },
    software: { label: "Software Engineering", color: "#14b8a6" },
    ai: { label: "AI & ML Basics", color: "#a855f7" },
    cyber: { label: "Cyber Security", color: "#facc15" },
    mixed: { label: "Mixed Stack", color: "#9333ea" }
};

const baseQuestionSets = {
    html: [
        { id: "html-1", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"], answerIndex: 0 },
        { id: "html-2", question: "Which tag is used for the largest heading in HTML?", options: ["<h6>", "<heading>", "<h1>", "<header>"], answerIndex: 2 },
        { id: "html-3", question: "Which HTML element forces a line break?", options: ["<lb>", "<br>", "<break>", "<line>"], answerIndex: 1 },
        { id: "html-4", question: "Which attribute adds inline styles in HTML?", options: ["class", "styles", "style", "font"], answerIndex: 2 },
        { id: "html-5", question: "Which element links an external CSS file?", options: ["<style>", "<script>", "<link>", "<css>"], answerIndex: 2 }
    ],
    css: [
        { id: "css-1", question: "CSS stands for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], answerIndex: 1 },
        { id: "css-2", question: "Property to change background color?", options: ["bgcolor", "color", "background-color", "background"], answerIndex: 2 },
        { id: "css-3", question: "Shorthand property for border?", options: ["border-style", "border-width", "border-color", "border"], answerIndex: 3 },
        { id: "css-4", question: "Property to set font family?", options: ["font-family", "font-style", "font-size", "text-font"], answerIndex: 0 },
        { id: "css-5", question: "Property to center text?", options: ["align", "text-align", "center-align", "font-align"], answerIndex: 1 }
    ],
    javascript: [
        { id: "js-1", question: "What does 'var' declare?", options: ["Variable", "Function", "Constant", "Loop"], answerIndex: 0 },
        { id: "js-2", question: "Correct function syntax?", options: ["function myFunction()", "function = myFunction()", "function:myFunction()", "myFunction function()"], answerIndex: 0 },
        { id: "js-3", question: "Method to lowercase strings?", options: ["toLowerCase()", "toLower()", "changeCase()", "lowerCase()"], answerIndex: 0 },
        { id: "js-4", question: "Assignment operator?", options: ["*", "=", "-", "+"], answerIndex: 1 },
        { id: "js-5", question: "Find element by ID?", options: ["getElementById()", "findElement()", "querySelectorAll()", "getId()"], answerIndex: 0 }
    ],
    database: [
        { id: "db-1", question: "SQL stands for?", options: ["Structured Query Language", "Sequential Query Language", "Structured Question Language", "System Query Logic"], answerIndex: 0 },
        { id: "db-2", question: "Which command retrieves data?", options: ["UPDATE", "SELECT", "DELETE", "INSERT"], answerIndex: 1 },
        { id: "db-3", question: "1NF eliminates?", options: ["Transitive dependency", "Duplicate tables", "Repeating groups", "Foreign keys"], answerIndex: 2 },
        { id: "db-4", question: "ACID 'C' stands for?", options: ["Concurrency", "Consistency", "Connection", "Constraint"], answerIndex: 1 },
        { id: "db-5", question: "Primary key must be?", options: ["Nullable", "Unique", "Composite", "Foreign"], answerIndex: 1 }
    ],
    networking: [
        { id: "net-1", question: "OSI model has how many layers?", options: ["5", "6", "7", "8"], answerIndex: 2 },
        { id: "net-2", question: "TCP operates at which layer?", options: ["Transport", "Network", "Data Link", "Physical"], answerIndex: 0 },
        { id: "net-3", question: "Device connecting different networks?", options: ["Switch", "Hub", "Router", "Bridge"], answerIndex: 2 },
        { id: "net-4", question: "Protocol for secure web traffic?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], answerIndex: 2 },
        { id: "net-5", question: "IP address version 6 length?", options: ["32-bit", "64-bit", "96-bit", "128-bit"], answerIndex: 3 }
    ],
    software: [
        { id: "se-1", question: "Requirement gathering phase in?", options: ["Testing", "Deployment", "Analysis", "Maintenance"], answerIndex: 2 },
        { id: "se-2", question: "Agile emphasizes?", options: ["Comprehensive docs", "Contract negotiation", "Customer collaboration", "Following plan"], answerIndex: 2 },
        { id: "se-3", question: "UML diagram showing class relations?", options: ["Sequence", "Class", "Activity", "State"], answerIndex: 1 },
        { id: "se-4", question: "Regression testing ensures?", options: ["New features added", "Old features still work", "Security patched", "Docs updated"], answerIndex: 1 },
        { id: "se-5", question: "CI/CD primarily aims for?", options: ["Manual releases", "Frequent automated delivery", "Waterfall model", "Long release cycles"], answerIndex: 1 }
    ],
    ai: [
        { id: "ai-1", question: "Supervised learning uses?", options: ["Unlabeled data", "No data", "Labeled data", "Random data"], answerIndex: 2 },
        { id: "ai-2", question: "Perceptron belongs to?", options: ["Neural networks", "Decision trees", "KNN", "SVM"], answerIndex: 0 },
        { id: "ai-3", question: "Overfitting occurs when model?", options: ["Generalizes well", "Is too simple", "Memorizes training data", "Has no error"], answerIndex: 2 },
        { id: "ai-4", question: "Metric for classification accuracy?", options: ["MAE", "RMSE", "Precision/Recall", "MSE"], answerIndex: 2 },
        { id: "ai-5", question: "Gradient descent purpose?", options: ["Increase loss", "Minimize loss", "Normalize data", "Split dataset"], answerIndex: 1 }
    ],
    cyber: [
        { id: "cy-1", question: "CIA triad stands for?", options: ["Control, Integrity, Access", "Confidentiality, Integrity, Availability", "Confidentiality, Identity, Access", "Control, Identity, Availability"], answerIndex: 1 },
        { id: "cy-2", question: "Malware demanding ransom?", options: ["Worm", "Trojan", "Ransomware", "Spyware"], answerIndex: 2 },
        { id: "cy-3", question: "Technique of deceiving users via email?", options: ["Sniffing", "Phishing", "Spoofing", "Brute force"], answerIndex: 1 },
        { id: "cy-4", question: "Firewall primarily operates as?", options: ["Encryption tool", "Access control between networks", "Backup system", "Authentication server"], answerIndex: 1 },
        { id: "cy-5", question: "Hashing ensures?", options: ["Confidentiality", "Integrity", "Availability", "Redundancy"], answerIndex: 1 }
    ]
};

const questionBank = {
    ...baseQuestionSets,
    mixed: Object.values(baseQuestionSets).flat()
};

const aiTipsLibrary = {
    html: [
        "Glance at attributes: accessibility-friendly markup earns full credit.",
        "Eliminate answers with invalid angle-bracket syntax first.",
        "Remember: semantic tags describe meaning, not just appearance."
    ],
    css: [
        "Think in layers: selector → property → value.",
        "Units and hyphenated properties often repeat in correct answers.",
        "Longhand properties beat shorthand when questions stress specificity."
    ],
    javascript: [
        "Match keywords with their ECMAScript definition for precision.",
        "If it affects behavior, the answer likely references functions or scope.",
        "Mind the difference between methods (with parentheses) and properties."
    ],
    database: [
        "Spot SQL verbs (SELECT/UPDATE) before looking at clauses.",
        "Normalization questions usually cite specific normal form symptoms.",
        "ACID hints often map to transaction guarantees."
    ],
    networking: [
        "Map protocols to OSI layers before choosing answers.",
        "Remember devices: router = network layer, switch = data link.",
        "Secure protocols usually add an S (HTTPS, SFTP)."
    ],
    software: [
        "Keywords like requirement, design, testing map to SDLC phases.",
        "Agile vs Waterfall? Think values: collaboration vs contract.",
        "Quality gates often refer to regression or CI/CD pipelines."
    ],
    ai: [
        "Supervised uses labeled data; unsupervised does not.",
        "Overfitting questions hint at memorizing training noise.",
        "Optimization = minimizing loss via gradients."
    ],
    cyber: [
        "CIA triad anchors most security principle questions.",
        "If money or encryption is mentioned, think ransomware or crypto.",
        "Phishing = social engineering, firewalls = access control."
    ],
    mixed: [
        "Scan for the domain first (HTML/CSS/JS) before committing to an answer.",
        "Look for obviously invalid syntax to narrow choices quickly.",
        "Pair concepts: HTML → structure, CSS → presentation, JS → logic."
    ]
};

const selectedCourse = sessionStorage.getItem("selectedCourse");
const username = sessionStorage.getItem("username") || "Guest";
const requestedCount = parseInt(sessionStorage.getItem("questionCount"), 10) || 5;

if (!selectedCourse || !questionBank[selectedCourse]) {
    window.location.href = "index.html";
}

const questionText = document.getElementById("question-text");
const form = document.getElementById("quiz-form");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const timerElement = document.getElementById("timer");
const courseInfoElement = document.getElementById("course-info");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const aiTipElement = document.getElementById("ai-tip");
const statsKey = `quizUser:${username}`;

const startTime = new Date();
let timerInterval;
let currentQuestion = 0;
let totalTimeAllowed = 0;

const baseCourseIds = Object.keys(questionBank).filter((id) => id !== "mixed");

const availablePool = selectedCourse === "mixed"
    ? baseCourseIds.flatMap((id) => questionBank[id])
    : questionBank[selectedCourse] || [];

const questions = selectQuestions(availablePool, requestedCount);
const questionCount = questions.length;
const selectedAnswers = new Array(questionCount).fill(null);

if (questionCount === 0) {
    alert("No questions are available for this course right now. Please try another course.");
    window.location.href = "index.html";
}

const shortfallMessage = requestedCount > questionCount
    ? `Only ${questionCount} curated question${questionCount === 1 ? "" : "s"} available right now.`
    : "";

if (courseInfoElement) {
    const courseLabel = courseMetadata[selectedCourse]?.label || "Selected Course";
    courseInfoElement.textContent = `${courseLabel} • ${questionCount} question${questionCount > 1 ? "s" : ""}`;
    if (shortfallMessage) {
        const note = document.createElement("span");
        note.className = "course-note";
        note.textContent = ` ${shortfallMessage}`;
        courseInfoElement.appendChild(note);
    }
}

form.addEventListener("submit", (event) => event.preventDefault());
form.addEventListener("change", (event) => {
    if (event.target.name === "answer") {
        selectedAnswers[currentQuestion] = Number(event.target.value);
    }
});

loadQuestion(currentQuestion);
updateNavigation();
startTimer();

nextBtn.addEventListener("click", () => {
    if (currentQuestion >= questionCount - 1) return;
    persistCurrentSelection();
    currentQuestion++;
    loadQuestion(currentQuestion);
    updateNavigation();
});

prevBtn.addEventListener("click", () => {
    if (currentQuestion === 0) return;
    persistCurrentSelection();
    currentQuestion--;
    loadQuestion(currentQuestion);
    updateNavigation();
});

submitBtn.addEventListener("click", () => {
    persistCurrentSelection();
    finalizeQuiz(false);
});

function persistCurrentSelection() {
    const selectedOption = form.querySelector('input[name="answer"]:checked');
    selectedAnswers[currentQuestion] = selectedOption ? Number(selectedOption.value) : null;
}

function loadQuestion(index) {
    const question = questions[index];
    questionText.innerText = `Question ${index + 1}: ${question.question}`;
    form.innerHTML = "";

    question.options.forEach((option, optionIndex) => {
        const optionId = `option-${index}-${optionIndex}`;
        const optionRow = document.createElement("div");
        optionRow.className = "option-row";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = optionIndex;
        input.id = optionId;

        const label = document.createElement("label");
        label.setAttribute("for", optionId);
        label.textContent = option;

        optionRow.appendChild(input);
        optionRow.appendChild(label);
        form.appendChild(optionRow);
    });

    const savedAnswer = selectedAnswers[index];
    if (savedAnswer !== null) {
        const inputToCheck = form.querySelector(`input[value="${savedAnswer}"]`);
        if (inputToCheck) {
            inputToCheck.checked = true;
        }
    }

    updateAiTip(index);
}

function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.style.display = currentQuestion === questionCount - 1 ? "none" : "inline-block";
    submitBtn.style.display = currentQuestion === questionCount - 1 ? "inline-block" : "none";

    const answered = selectedAnswers.filter((answer) => answer !== null).length;
    if (progressText) {
        progressText.textContent = `Question ${currentQuestion + 1} of ${questionCount} • ${answered}/${questionCount} answered`;
    }
    if (progressFill) {
        progressFill.style.width = `${(answered / questionCount) * 100}%`;
    }
}

function startTimer() {
    const timePerQuestion = 30; // seconds
    totalTimeAllowed = Math.max(timePerQuestion * questionCount, 60);
    let timeLimit = totalTimeAllowed;

    function updateTimer() {
        const minutes = Math.floor(timeLimit / 60);
        const seconds = timeLimit % 60;
        if (timerElement) {
            timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
        timeLimit--;

        if (timeLimit < 0) {
            clearInterval(timerInterval);
            alert("Time is up! Submitting your quiz...");
            finalizeQuiz(true);
        }
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function finalizeQuiz(autoSubmitted) {
    persistCurrentSelection();
    clearInterval(timerInterval);
    const endTime = new Date();
    const timeTaken = Math.floor((endTime - startTime) / 1000);

    const score = selectedAnswers.reduce((total, answer, index) => {
        return answer === questions[index].answerIndex ? total + 1 : total;
    }, 0);
    const answeredCount = selectedAnswers.filter((answer) => answer !== null).length;
    const accuracy = Number(((score / questionCount) * 100).toFixed(1));
    const basePoints = score * 10;
    const completionBonus = answeredCount === questionCount ? 5 : 0;
    const speedBonus = totalTimeAllowed ? Math.max(0, Math.floor(Math.max(totalTimeAllowed - timeTaken, 0) / 15)) : 0;
    const pointsEarned = basePoints + completionBonus + speedBonus;

    const questionResults = questions.map((question, index) => {
        const selectedIndex = selectedAnswers[index];
        return {
            questionId: question.id,
            question: question.question,
            selectedOption: selectedIndex !== null ? question.options[selectedIndex] : "Not answered",
            correctOption: question.options[question.answerIndex],
            isCorrect: selectedIndex === question.answerIndex,
            wasSkipped: selectedIndex === null
        };
    });

    const reportCard = {
        courseId: selectedCourse,
        courseName: courseMetadata[selectedCourse]?.label || selectedCourse,
        requestedCount,
        totalQuestions: questionCount,
        score,
        timeTaken,
        accuracy,
        startedAt: startTime.toISOString(),
        finishedAt: endTime.toISOString(),
        autoSubmitted: Boolean(autoSubmitted),
        username,
        pointsEarned,
        questionResults
    };

    const stats = JSON.parse(localStorage.getItem(statsKey)) || { totalPoints: 0, quizzes: 0, bestAccuracy: 0 };
    stats.totalPoints = (stats.totalPoints || 0) + pointsEarned;
    stats.quizzes = (stats.quizzes || 0) + 1;
    stats.bestAccuracy = Math.max(stats.bestAccuracy || 0, accuracy);
    localStorage.setItem(statsKey, JSON.stringify(stats));
    reportCard.totalPoints = stats.totalPoints;

    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({
        name: username,
        points: pointsEarned,
        accuracy,
        course: reportCard.courseName,
        date: reportCard.finishedAt
    });
    leaderboard.sort((a, b) => {
        if (b.points === a.points) {
            return b.accuracy - a.accuracy;
        }
        return b.points - a.points;
    });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard.slice(0, 20)));

    sessionStorage.setItem("reportCard", JSON.stringify(reportCard));
    window.location.href = "results.html";
}

function updateAiTip(index) {
    if (!aiTipElement) return;
    const tips = aiTipsLibrary[selectedCourse] || aiTipsLibrary.mixed;
    const tip = tips[index % tips.length];
    aiTipElement.textContent = `AI tip: ${tip}`;
}

function selectQuestions(pool, desiredCount) {
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const limited = shuffled.slice(0, Math.min(desiredCount, shuffled.length));
    return limited;
}

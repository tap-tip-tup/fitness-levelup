document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');

    const categoryButtonsContainer = document.getElementById('category-buttons');
    const courseButtons = document.querySelectorAll('.course-btn');
    
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const feedbackElement = document.getElementById('feedback');
    const explanationContainer = document.getElementById('explanation-container');
    const explanationElement = document.getElementById('explanation');
    
    const quizControls = document.getElementById('quiz-controls');
    const nextBtn = document.getElementById('next-btn');
    const quitBtn = document.getElementById('quit-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    const scoreElement = document.getElementById('score');
    const progressBar = document.getElementById('progress-bar');
    const quizTitle = document.getElementById('quiz-title');

    const allQuestions = [
        ...techniqueQuestions,
        ...designQuestions,
        ...nutritionQuestions,
        ...safetyQuestions
    ];

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    function initialize() {
        populateCategoryButtons();
        courseButtons.forEach(button => button.addEventListener('click', startGame));
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            setNextQuestion();
        });
        quitBtn.addEventListener('click', showStartScreen);
        restartBtn.addEventListener('click', showStartScreen);
        showStartScreen();
    }

    function populateCategoryButtons() {
        const categories = [...new Set(allQuestions.map(q => q.category))];
        categoryButtonsContainer.innerHTML = '';
        categories.forEach(category => {
            const button = document.createElement('button');
            button.innerText = category;
            button.className = 'course-btn';
            button.dataset.type = 'category';
            button.dataset.value = category;
            categoryButtonsContainer.appendChild(button);
            button.addEventListener('click', startGame);
        });
    }

    function startGame(event) {
        const { type, value } = event.target.dataset;
        
        if (type === 'difficulty') {
            currentQuestions = allQuestions.filter(q => q.difficulty === value);
            quizTitle.innerText = `${value}レベル`;
        } else if (type === 'category') {
            currentQuestions = allQuestions.filter(q => q.category === value);
            quizTitle.innerText = value;
        }

        currentQuestions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        score = 0;

        startScreen.classList.remove('active');
        resultScreen.classList.remove('active');
        quizScreen.classList.add('active');
        
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        updateProgressBar();
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion(currentQuestions[currentQuestionIndex]);
        } else {
            showResult();
        }
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = 'true';
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    function resetState() {
        quizControls.classList.add('hide');
        nextBtn.innerText = '次の問題へ'; // ボタンのテキストをリセット
        feedbackElement.innerText = '';
        explanationContainer.classList.add('hide');
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const correct = selectedBtn.dataset.correct === 'true';
        const currentQuestion = currentQuestions[currentQuestionIndex];

        if (correct) {
            score++;
            feedbackElement.innerText = "正解！";
            feedbackElement.style.color = '#28a745';
        } else {
            const correctAnswerText = currentQuestion.answers.find(ans => ans.correct).text;
            feedbackElement.innerText = `不正解！正解は「${correctAnswerText}」です。`;
            feedbackElement.style.color = '#dc3545';
        }

        explanationElement.innerText = currentQuestion.explanation;
        explanationContainer.classList.remove('hide');

        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
            button.disabled = true;
        });

        quizControls.classList.remove('hide');
        if (currentQuestions.length <= currentQuestionIndex + 1) {
            nextBtn.innerText = '結果を見る';
        }
    }

    function showResult() {
        quizScreen.classList.remove('active');
        resultScreen.classList.add('active');
        scoreElement.innerText = `${score} / ${currentQuestions.length}`;
    }

    function showStartScreen() {
        resultScreen.classList.remove('active');
        quizScreen.classList.remove('active');
        startScreen.classList.add('active');
    }

    function updateProgressBar() {
        const progress = currentQuestions.length > 0 ? ((currentQuestionIndex) / currentQuestions.length) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    }

    initialize();
});

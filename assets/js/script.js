var questions = [
    {
        question: "Javascript is an _______ language?",
        answers: ["Object-Oriented","Object-Based", "Procedural", "None of the above"],
        right: "Object-Oriented"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: ["var","let", "Both A and B", "None of the above"],
        right: "Both A and B"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: ["getElementbyId()","getElementByClassName()", "Both A and B", "None of the above"],
        right: "Both A and B"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: ["document.write()","consol.log()", "window.alert()", "All of the above"],
        right: "All of the above"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        answers: ["stringify()","parse()", "conver()", "None of the above"],
        right: "stringify()"
    }
];

var beginDivEl = document.querySelector('#begin');
var quizDivEl = document.querySelector('#quiz');
var doneDivEl = document.querySelector('#done');

var respDivEl = document.querySelector('#response');
var wrongEl = document.querySelector('#wrong');
var correctEl = document.querySelector('#correct');

var startBtnEl = document.querySelector('#startBtn');

var questionEl = document.querySelector('#question');
var questionInd = 0;
var answersEl = document.querySelector('#answers');

var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");

var timerEl = document.querySelector('#timer');
var time = 75;

var scoresEl = document.querySelector('#scores');
var finalScoreEl = document.querySelector('#finalScore');
var finalScore;
var highScores = [];

var initialsEl = document.querySelector('#initials')
var submitBtnEl = document.querySelector('#submit');

function setQuestion(questionInd) {
    questionEl.textContent = questions[questionInd].question;
    
    ans1.textContent = questions[questionInd].answers[0];
    ans2.textContent = questions[questionInd].answers[1];
    ans3.textContent = questions[questionInd].answers[2];
    ans4.textContent = questions[questionInd].answers[3];
    
    ans1.setAttribute('class', 'uk-button uk-button-primary');
    ans2.setAttribute('class', 'uk-button uk-button-primary');
    ans3.setAttribute('class', 'uk-button uk-button-primary');
    ans4.setAttribute('class', 'uk-button uk-button-primary');
    
    ans1.setAttribute('data-number', questionInd);
    ans2.setAttribute('data-number', questionInd);
    ans3.setAttribute('data-number', questionInd);
    ans4.setAttribute('data-number', questionInd);
    
    answersEl.appendChild(ans1);
    answersEl.appendChild(ans2);
    answersEl.appendChild(ans3);
    answersEl.appendChild(ans4);
}

function reset() {
    respDivEl.setAttribute('class', 'uk-hidden');
    correctEl.setAttribute('class', 'uk-hidden');
    wrongEl.setAttribute('class', 'uk-hidden');
}

function timedQuiz(){
    var timeInterval = setInterval(function() {

        if (time > 1) {
            timerEl.textContent = time;
            
            if (questionInd < questions.length) {
                setQuestion(questionInd);
            } else {
                finalScoreEl.textContent = time;
                finalScore = time;
                quizDivEl.setAttribute('class', 'uk-hidden');
                doneDivEl.setAttribute('class', 'uk-visible');
                clearInterval(timeInterval);
            }

            reset(); 
            time--;
        } else {
            finalScoreEl.textContent = 0;
            finalScore = 0;
            timerEl.textContent = 0;
            quizDivEl.setAttribute('class', 'uk-hidden');
            doneDivEl.setAttribute('class', 'uk-visible');
            clearInterval(timeInterval);
        }  

    }, 1000);
}

startBtnEl.addEventListener('click', function() {
    beginDivEl.setAttribute('class', 'uk-hidden');
    quizDivEl.setAttribute('class', 'uk-visible');

    timedQuiz();
});

answersEl.addEventListener('click', function(event) {
    respDivEl.setAttribute('class', 'uk-visible');

    var element = event.target;

    var clicked = element.getAttribute('data-number');
    
    var ans = element.textContent;

    if (questions[clicked].right == ans) {
        correctEl.setAttribute('class', 'uk-visible');
    } else if (questions[clicked].right != ans) {
        wrongEl.setAttribute('class', 'uk-visible');
        time = time - 15;
    }

    questionInd++;
});

submitBtnEl.addEventListener('click', function(event) {
    event.preventDefault();

    var highScore = {
        initial: document.querySelector('input').value,
        score: finalScoreEl.textContent
    }

    var temp = localStorage.getItem("highScores");
    if (temp != null) {
        users = JSON.parse(temp);
    }

    highScores.push(highScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));
});
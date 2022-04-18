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

var scoresEl = document.querySelector('#scores');

startBtnEl.addEventListener('click', function() {
    beginDivEl.setAttribute('class', 'uk-hidden');
    quizDivEl.setAttribute('class', 'uk-visible');

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
    }
});
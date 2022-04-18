var scoresEl = document.querySelector('#scores');
var clearBtn = document.querySelector('#clear');

var temp = localStorage.getItem("highScores");
if (temp != null) {
    highScores = JSON.parse(temp);

    for(var i = 0; i < highScores.length; i++){
        var score = document.createElement("p");

        score.textContent = i+1 + ". " +highScores[i].initial + " - " + highScores[i].score;

        scoresEl.appendChild(score);
    }
}

clearBtn.addEventListener('click', function() {
    localStorage.clear();
});
var mainEl = document.querySelector("main")
var starBtnEl = document.querySelector("start-btn")
var timeEl = document.querySelector("#time-el");

var interval;
var time = 100;
var questionIndex = 0;

var question = [
  {
    questionText: "What is your favorite color?",
    questionChoices: ["Red", "White", "Blue"],
    correctAnswer: 0
  },

  {
    questionText: "What is your favorite food?",
    questionChoices: ["Pizza", "Hotdogs", "Gyros"],
    correctAnswer: 2
  },
]

function displayQuestion() {
  mainEl.innerHTML = "";

  var h1El = document.createElement('h1');
  h1El.textContent = questions[questionIndex].questionText;
  mainEl.appendChild(h1El);

  var btnDivEl = document.

  for (var i = 0; i < questions[questionIndex].questionChoices.length; i++) {
    var buttonEl = document.createElement('button');
    buttonEl.textContent = questions[questionIndex].questionChoices[i];
    buttonEl.setAttribute("class", )
    mainEl.appendChild(buttonEl);
  }

};

starBtnEl.addEventListener("click", function (event) {
  console.log('hit')

  mainEl.innerHTML = "";

  interval = setInterval(function() {
    time--;
    timeEl.textContent = `Time: ${time}`;


    if (time <= 0) {
      clearInterval(interval);
      endGame();
      return;
    }

  }, 1000);

  displayQuestion();
  
});

mainEl.addEventListener("click", function(event) {
  var target = event.target;

  if();

});

function endGame() {
  
};
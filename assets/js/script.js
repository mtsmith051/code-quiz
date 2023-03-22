var mainEl = document.querySelector("main")
var starBtnEl = document.querySelector("start-btn")
var timeEl = document.querySelector("#time-el");

var interval;
var time = 100;
var questionIndex = 0;

var question = [
  {
    questionText: "Who is the main character?",
    questionChoices: ["Goku", "Yamcha", "Bulma", "Master Roshi"],
    correctAnswer: 0
  },

  {
    questionText: "How many World Martial Arts Tournaments has Goku won?",
    questionChoices: ["3", "1", "5", "7"],
    correctAnswer: 2
  },

  {
    questionText: "Who defeated Goku in his first W.M.A.T.?",
    questionChoices: ["Master Roshi", "Krillin", "Vegeta", "Jackie Chun"],
    correctAnswer: 3
  },

  {
    questionText: "Who was Goku's first Villain?",
    questionChoices: ["Piccolo Jr", "Emperor Pilaf", "Garlic Jr.", "Freeza"],
    correctAnswer: 1
  },

  {
    questionText: "Who trained Goku?",
    questionChoices: ["Oolong", "Chi Chi", "Master Roshi", "Shenron"],
    correctAnswer: 2
  },

  {
    questionText: "What does Goku transform into under a full moon?",
    questionChoices: ["Giant Ape", "Giant Squid", "A Beautiful Girl", "A Sandwich"],
    correctAnswer: 0
  },

  {
    questionText: "What are Goku and the Gang searching for throughout the series?",
    questionChoices: ["A genie", "A Leprechaun's Gold", "The meaning of life", "The Dragon Balls"],
    correctAnswer: 3
  }
]

function displayQuestion() {
  mainEl.innerHTML = "";

  var h1El = document.createElement('h1');
  h1El.textContent = question[questionIndex].questionText;
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
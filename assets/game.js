var userRock = document.getElementById("rock-user");
var userPaper = document.getElementById("paper-user");
var userScissors = document.getElementById("scissors-user");

var compRock = document.getElementById("rock-comp");
var compPaper = document.getElementById("paper-comp");
var compScissors = document.getElementById("scissors-comp");

var rockButtonUser = document.getElementById("rockButton");
var paperButtonUser = document.getElementById("paperButton");
var scissorsButtonUser = document.getElementById("scissorsButton");

var scoreOfTheUser = document.getElementById("score-user");
var scoreOfTheComputer = document.getElementById("score-computer");

var playAgain = document.getElementById("playAgain");

var userScore = 0;
var computerScore = 0;
var randomNum = 0;

function computerPlays() {
  randomNum = generateRandom();
  compRock.style.display = randomNum === 1 ? "block" : "none";
  compPaper.style.display = randomNum === 2 ? "block" : "none";
  compScissors.style.display = randomNum === 3 ? "block" : "none";
}

function generateRandom() {
  return Math.floor(Math.random() * 3) + 1;
}

function checkGameOutcome() {
  if (userScore === 5 || computerScore === 5) {
    // Game ends
    let resultText = document.createElement("div");
    resultText.textContent =
      userScore === 5 ? "You won the game!" : "Computer won the game!";
    resultText.classList.add("resultText");

    // Hide hand images and buttons
    hideElements([
      userRock,
      userPaper,
      userScissors,
      rockButtonUser,
      paperButtonUser,
      scissorsButtonUser,
    ]);

    // Append result text and restart button to a container
    let resultContainer = document.createElement("div");
    resultContainer.classList.add("resultContainer");
    resultContainer.appendChild(resultText);
    resultContainer.appendChild(playAgain);

    // Append the container to the body
    document.body.appendChild(resultContainer);
  }
}

function hideElements(elements) {
  elements.forEach((element) => {
    element.style.display = "none";
  });
}

rockButtonUser.onclick = () => {
  computerPlays();
  userRock.style.display = "block";
  userScissors.style.display = "none";
  userPaper.style.display = "none";

  if (randomNum === 2) {
    computerScore += 1;
  } else if (randomNum === 3) {
    userScore += 1;
  }
  scoreOfTheUser.innerHTML = userScore;
  scoreOfTheComputer.innerHTML = computerScore;
  checkGameOutcome();
};

scissorsButtonUser.onclick = () => {
  computerPlays();
  userScissors.style.display = randomNum === 3 ? "block" : "none";
  userRock.style.display = randomNum === 1 ? "none" : "none";
  userPaper.style.display = randomNum === 2 ? "none" : "none";

  computerScore += randomNum === 1 ? 1 : 0;
  userScore += randomNum === 2 ? 1 : 0;

  scoreOfTheUser.innerHTML = userScore;
  scoreOfTheComputer.innerHTML = computerScore;
  checkGameOutcome();
};

paperButtonUser.onclick = () => {
  computerPlays();
  userPaper.style.display = "block";
  userScissors.style.display = "none";
  userRock.style.display = "none";

  if (randomNum === 3) {
    computerScore += 1;
  } else if (randomNum === 1) {
    userScore += 1;
  }
  scoreOfTheUser.innerHTML = userScore;
  scoreOfTheComputer.innerHTML = computerScore;
  checkGameOutcome();
};

playAgain.addEventListener("click", () => {
  window.location = "Game.html";
});
let userSore = 0,
  compSore = 0,
  choices = document.querySelectorAll(".choice"),
  msg = document.querySelector("#msg");

function genCompChoice() {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

function drawGame(compChoice) {
  msg.innerHTML = `Game was draw! Play again<br>Comp : ${compChoice}`;
  msg.style.backgroundColor = "#081b31";
}

function showWinner(userWin, compChoice) {
  if (userWin) {
    userSore++;
    document.querySelector("#user-score").innerText = userSore;
    msg.innerHTML = `You Win<br>Comp : ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compSore++;
    document.querySelector("#comp-score").innerText = compSore;
    msg.innerHTML = `You Lose<br>Comp : ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
}

function playGame(userChoice) {
  const compChoice = genCompChoice();
  if (userChoice == compChoice) {
    drawGame(compChoice);
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "scissors" ? false : true;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, compChoice);
  }
}

for (choice of choices) {
  choice.addEventListener("click", function () {
    const userChoice = this.getAttribute("id");
    playGame(userChoice);
  });
}

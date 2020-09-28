const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Call compare hands up here
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    //In the case of a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "Draw!";
      return;
    }

    //If player throws rock
    if (playerChoice === "rock") {
      if (computerChoice == "scissors") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }

    //If player throws paper
    if (playerChoice === "paper") {
      if (computerChoice == "rock") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }

    //If player throws scissors
    if (playerChoice === "scissors") {
      if (computerChoice == "paper") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();

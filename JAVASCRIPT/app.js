document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const playerChoiceElement = document.getElementById('player-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    const resultTextElement = document.getElementById('result-text');
    const totalGamesElement = document.getElementById('total-games');
    const playerWinsElement = document.getElementById('player-wins');
    const computerWinsElement = document.getElementById('computer-wins');
    const drawsElement = document.getElementById('draws');
    const resetButton = document.getElementById('reset');

    let totalGames = 0;
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.id.toUpperCase(); // Convertir en majuscules pour correspondre
            const computerChoice = getComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);

            playerChoiceElement.textContent = `Votre choix : ${playerChoice}`;
            computerChoiceElement.textContent = `Choix de l'ordinateur : ${computerChoice}`;
            resultTextElement.textContent = `Résultat : ${result}`;

            totalGames++;
            totalGamesElement.textContent = totalGames;

            if (result === "Vous gagnez !") {
                playerWins++;
                playerWinsElement.textContent = playerWins;
            } else if (result === "Vous perdez !") {
                computerWins++;
                computerWinsElement.textContent = computerWins;
            } else {
                draws++;
                drawsElement.textContent = draws;
            }
        });
    });

    resetButton.addEventListener('click', () => {
        totalGames = 0;
        playerWins = 0;
        computerWins = 0;
        draws = 0;

        totalGamesElement.textContent = totalGames;
        playerWinsElement.textContent = playerWins;
        computerWinsElement.textContent = computerWins;
        drawsElement.textContent = draws;

        playerChoiceElement.textContent = "Votre choix : ";
        computerChoiceElement.textContent = "Choix de l'ordinateur : ";
        resultTextElement.textContent = "Résultat : ";
    });

    function getComputerChoice() {
        const choices = ['PIERRE', 'FEUILLE', 'CISEAUX'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "Égalité !";
        }

        if (
            (playerChoice === 'PIERRE' && computerChoice === 'CISEAUX') ||
            (playerChoice === 'FEUILLE' && computerChoice === 'PIERRE') ||
            (playerChoice === 'CISEAUX' && computerChoice === 'FEUILLE')
        ) {
            return "Vous gagnez !";
        } else {
            return "Vous perdez !";
        }
    }
});
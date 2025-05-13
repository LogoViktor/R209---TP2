document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const playerChoiceElement = document.getElementById('player-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    const resultTextElement = document.getElementById('result-text');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);

            playerChoiceElement.textContent = `Votre choix : ${playerChoice}`;
            computerChoiceElement.textContent = `Choix de l'ordinateur : ${computerChoice}`;
            resultTextElement.textContent = `Résultat : ${result}`;
        });
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
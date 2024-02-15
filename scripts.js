const result = document.querySelector(".result")
const humanScore = document.getElementById("human-score")
const machineScore = document.getElementById("machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random()*3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine){
        result.innerHTML = "Deu empate!"

    } else if ( human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper' || 
    human === 'paper' && machine === 'rock') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!" 
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
    }

}
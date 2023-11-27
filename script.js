const score = {
    player: 0,
    computer: 0
}

scoring()

function computerMove(){
    const randomNum = Math.random()

    console.log(randomNum)
    let compMove = ''

    if(randomNum >= 0 && randomNum < 1 / 3){
        compMove = 'rock'
    }
    else if(randomNum >= 1 / 3 && randomNum < 2 / 3){
        compMove = 'paper'
    }
    else{
        compMove = 'scissors'
    }

    return compMove
}

function game(move){
    const compMove = computerMove()

    let msg = ''

    if(move === 'rock' && compMove === 'scissors' || move === 'paper' && compMove === 'rock' || move === 'scissors' && compMove === 'paper'){
        msg = 'You win'
        score.player += 1
    }
    else if(move === 'rock' && compMove === 'paper' || move === 'paper' && compMove === 'scissors' || move === 'scissors' && compMove === 'rock'){
        msg = 'You lose'
        score.computer += 1
    }
    else{
        msg = 'Its a tie'
    }

    scoring()
    document.querySelector('.result').innerHTML = `${msg}.`

    document.querySelector('.my-move').innerHTML = `You <img src="./images/icon-${move}.svg">`

    document.querySelector('.comp-move').innerHTML = `<img src="./images/icon-${compMove}.svg"> Computer`

    const resultMsg = document.querySelector('.decision')

    if(score.player === 5){
        resultMsg.innerHTML = 'You win. Congratulations!'
        resetScore()
    }
    else if(score.computer === 5){
        resultMsg.innerHTML = 'You lose. Better luck next time.'
        resetScore()
    }

}

function resetScore(){
    const modal = document.querySelector('.modal')
    const playAgainButton = document.querySelector('.play-again-button')

    modal.showModal()

    playAgainButton.addEventListener('click', () => {
        modal.close()
        scoring()
    })
    score.player = 0
    score.computer = 0
}



function rules(){
    const openRules = document.querySelector('.rules-icon')
    const closeRules = document.querySelector('.close')
    const mgaRules = document.querySelector('.rules')

    openRules.addEventListener('click', () => {
        mgaRules.showModal()
    })

    closeRules.addEventListener('click', () => {
        mgaRules.close()
    })
}

function scoring(){
    let scorePlayer = document.querySelector('.player-score-js')

    let scoreComputer = document.querySelector('.computer-score-js')

    scorePlayer.innerHTML = score.player
    scoreComputer.innerHTML = score.computer

}


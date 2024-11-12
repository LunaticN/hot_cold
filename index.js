let add1 = document.getElementById("add1")
let add5 = document.getElementById("add5")
let add10 = document.getElementById("add10")
let add25 = document.getElementById("add25")

let sub1 = document.getElementById("sub1")
let sub5 = document.getElementById("sub5")
let sub10 = document.getElementById("sub10")
let sub25 = document.getElementById("sub25")

let current_guess = document.getElementById("current_guess")
let previous_guesses = document.getElementById("previous_guesses")
let remaining_guesses = document.getElementById("remaining_guesses")

let commit = document.getElementById("commit")
let reset = document.getElementById("reset")

// let answerNumber = Math.floor(Math.random() * 100)
// let answer = document.createElement("p")
// answer.innerHTML = answerNumber
// document.body.appendChild(answer)
  
let wins = document.createElement("p")
wins.innerHTML = "Wins: " + localStorage.wins
document.body.appendChild(wins)
wins.style.color = "goldenrod"
wins.style.textAlign = "center"
wins.style.fontWeight = "bold"
wins.style.fontSize = "20px"


if (!(localStorage.wins)){
    localStorage.setItem("wins", 0)
}

let guess = 50
function editGuess(element){
    if (!(guess >= 100 || guess <= 0)){
        let num = parseInt(element.innerHTML.substring(0))
        switch(num) {
            case 1:
                guess+=1
                break
            case 5:
                guess+=5
                break
            case 10:
                guess+=10
                break
            case 25:
                guess+=25
                break
            case -1:
                guess-=1
                break
            case -5:
                guess-=5
                break
            case -10:
                guess-=10
                break
            case -25:
                guess-=25
                break
        } 
    }
    else {
        alert("You cannot have guesses that are over 100, 0, or a negative number.")
        guess = 50
    }
    current_guess.innerHTML = "Current Guess: " + guess
}

let rem_guesses_counter = 5
function commitGuess(){
    if(rem_guesses_counter == 0) {
        commit.disabled = true
        alert("all guesses have been expended.")
    }
    else {
        previous_guesses.innerHTML += guess + " "
        rem_guesses_counter--
        remaining_guesses.innerHTML = "Remaining Guesses: " + rem_guesses_counter

        if(!(guess == answerNumber)) {
            let distance = Math.abs(guess - answerNumber)
    
            if (distance > 55) {
                alert("very cold")
            }
            else if (distance >= 41) {
                alert("cold")
            }
            else if (distance >= 31) {
                alert("very cool")
            }
            else if (distance >= 21) {
                alert("cool")
            }
            else if (distance >= 16) {
                alert("warm")
            }
            else if (distance >= 9) {
                alert("very warm")
            }
            else if (distance >= 6) {
                alert("hot")
            }
            else {
                alert("very hot")
            }
        }
        else {
            commit.disabled = true
            alert("you got it! reset the game if you want")
            localStorage.wins = Number(localStorage.wins) + 1
            wins.innerHTML = "Wins: " + localStorage.wins
        }
    }
}

function resetGame() {
    commit.disabled = false
    answerNumber = Math.floor(Math.random() * 100)
    answer.innerHTML = answerNumber
    rem_guesses_counter = 5
    remaining_guesses.innerHTML = "Remaining Guesses: " + rem_guesses_counter
    guess = 50
    current_guess.innerHTML = "Current Guess: " + guess
    wins.innerHTML = "Wins: " + localStorage.wins
    previous_guesses.innerHTML = "Previous Guesses: "
}
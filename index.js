let randomNumber = Math.floor(Math.random() * 101);
const btn = document.querySelector("#btn");
const restart = document.querySelector(".restart");
const previousGusses = document.querySelector(".previous");
const computerGuess = document.querySelector(".number");
let remain = document.querySelector(".remain");
let remainingGuesses = 10;
remain.innerText = remainingGuesses;
const result = document.querySelector(".result");


const evaluate = () => {
    const guess = document.querySelector("#text");
    let guessedNo = guess.value;
    guess.value = "";
    console.log(guessedNo);
    console.log(randomNumber);

    if (guessedNo == "" || guessedNo >= 101 || guessedNo <= 0) {
        alert("please enter the valid number between 0 and 100!")
        return;
    }

    if (guessedNo == randomNumber) {
        result.innerText = "Congratulations!!! Your guessed number is right 🎉";
        remainingGuesses--;
        remain.innerText = remainingGuesses;
        previousGusses.innerHTML += guessedNo;
        btn.disabled = true;
        restart.innerText = "Play again!";
        return;
    }
    else if (guessedNo < randomNumber) {
        result.innerText = "Your guessed number is lower than the actual number";
        remainingGuesses--;
        remain.innerText = remainingGuesses;
        previousGusses.innerHTML += remainingGuesses == 0 ? guessedNo : guessedNo + ", ";
    }
    else {
        result.innerText = "Your guessed number is greater than the actual number";
        remainingGuesses--;
        remain.innerText = remainingGuesses;
        previousGusses.innerHTML += remainingGuesses == 0 ? guessedNo : guessedNo + ", ";
    }

    if (remainingGuesses == 0) {
        btn.disabled = true;
        restart.innerText = "Play again";
        result.innerText = "you failed to guess the correct number! please try again. 🥺"
        computerGuess.innerText = "The correct number was " + randomNumber;
    }
}

const playAgain = () => {
    randomNumber = Math.floor(Math.random() * 101);
    const guess = document.querySelector("#text");
    guess.value = "";
    remainingGuesses = 10;
    remain.innerText = remainingGuesses;
    previousGusses.innerHTML = "";
    restart.innerText = "Restart"
    btn.disabled = false;
    result.innerText = ""
}

btn.addEventListener('click', evaluate);
restart.addEventListener('click', playAgain);
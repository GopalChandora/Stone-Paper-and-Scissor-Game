let userScore = 0;
let compScore = 0;
let msg_cont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");
const choiceEle = document.querySelectorAll(".choice-ele");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        // msg_cont.classList.add('win');
        msg_cont.style.backgroundColor = "green";
        userscore.innerText = userScore += 1;
    }

    else {
        msg.innerText = `you Lose! ${compChoice} beats your ${userChoice}`;
        // msg_cont.classList.add('lost');
        msg_cont.style.backgroundColor = "red";
        compscore.innerText = compScore += 1;
    }

}

const draw = () => {
    msg.innerText = "Draw";
    msg_cont.style.backgroundColor = "black";
}

const genCompChoice = () => {
    let options = ["stone", "paper", "scissor"]
    let index = Math.floor((Math.random() * 3));
    return options[index];
}

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    let compChoice = genCompChoice();
    console.log("Computer Choice", compChoice);

    if (userChoice === compChoice) {
        draw();
    }
    else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        }

        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }

        else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choiceEle.forEach((choiceElem) => {
    choiceElem.addEventListener("click", () => {
        const userChoice = choiceElem.getAttribute('id');
        playGame(userChoice);
    });
});
// Self Logic Script

let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let user
let user_score = document.getElementById("user-score");
let comp_score = document.getElementById("comp-score");
let msg_con = document.getElementsByClassName("msg-container");
let msg = document.getElementById("msg");
let user_count = 0;
let comp_count = 0;

function compu() {
    let comp = Math.floor(Math.random() * 3);
    return comp
}

stone.addEventListener('click', () => {
    user = 0;
    let comp = compu();
    console.log(comp);
    if (user == comp) {
        msg.innerText = "Draw";
    }

    else if (user == 0 && comp == 1) {
        msg.innerText = "You Lost Paper beats Your Stone"
        lost();
        comp_count += 1;
        comp_score.innerText = comp_count
    }

    else if (user == 0 && comp == 2) {
        msg.innerText = "You Win Your Stone beats Scissor"
        user_count += 1
        user_score.innerText = user_count
    }
})

paper.addEventListener('click', () => {
   let comp = compu();
    user = 1;
    console.log(comp);
    if (user == comp) {
        msg.innerText = "Draw";
    }

    else if (user == 1 && comp == 0) {
        msg.innerText = "You Win Your Paper beats Stone"
        user_count += 1;
        user_score.innerText = user_count
    }

    else if (user == 1 && comp == 2) {
        msg.innerText = "You Lost Scissor beats Your Paper"
        comp_count += 1
        comp_score.innerText = comp_count
    }
})

scissor.addEventListener('click', () => {
   let comp = compu();
    user = 2;
    console.log(comp);
    if (user == comp) {
        msg.innerText = "Draw";
    }

    else if (user == 2 && comp == 0) {
        msg.innerText = "You Lost Stone beats your Scissor"
        comp_count += 1;
        comp_score.innerText = comp_count
    }

    else if (user == 2 && comp == 1) {
        msg.innerText = "You Win Your Scissor beats Paper"
        user_count += 1
        user_score.innerText = user_count
    }
})
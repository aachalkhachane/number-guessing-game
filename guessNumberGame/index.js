const containerElement = document.querySelector(".container");
const playagain = document.querySelector(".btn_again");
const hideNum = document.querySelector(".hide_num");
const inputNo = document.querySelector(".input_number");
const checkNo = document.querySelector(".btn_check");
const score_count = document.querySelector(".score");
const highScore = document.querySelector(".high_score");
const message = document.querySelector(".message");

//generate random number
let randomNo = Math.floor(Math.random()*20 + 1);
console.log(randomNo);
let score= 20;
let highscore = 0;

//event on check
checkNo.addEventListener('click',()=>{
    const guess = Number(inputNo.value);
    if(guess){
        //not match hidden number
        if(guess!=randomNo){
            if(score>1){
                score--;
                score_count.textContent = score;
                if(guess > randomNo){
                    message.textContent = "Too High!!";
                }else if(guess < randomNo){
                    message.textContent = "Too Low!!";
                }else{
                    message.textContent = "Please Enter Number!!";
                }
                score_count.textContent = score;
            }else{
                message.textContent = "You've Lost the chance";
                containerElement.style.backgroundcolor = "#fff";
                score_count.textContent = 0;
            }
        }else{
            hideNum.textContent = randomNo;
            hideNum.style.width = "50%";
            hideNum.style.transition = "all 0.5s ease-in";
            hideNum.style.backgroundcolor = "#e0d8d3";
            message.textContent = "Congrats You've won the Game!!!";
            highScore.textContent = score;
        }

    }else{
        message.textContent = "Please Enter Your Guess!";
    }
});

//reset game
playagain.addEventListener('click',()=>{
    score = 20;
    randomNo = Math.floor(Math.random()*20)+1;
    score_count.textContent = score;
    hideNum.textContent = "?";
    hideNum.style.width="25%";
    hideNum.style.transition = "all 0.5s ease-in";
    inputNo.value="";
    containerElement.style.backgroundcolor="#ddd";
    message.textContent = "Start Guessing........";
})
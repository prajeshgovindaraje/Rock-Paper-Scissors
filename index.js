
const rock_btn = document.getElementById("rock-btn")
const paper_btn = document.getElementById("paper-btn")
const scissor_btn = document.getElementById("scissor-btn")
let score_area = document.querySelector(".js-score-area")
let comp_move =" "


function displayScore(user,comp,result,resultArea){

  resultArea.textContent = `You picked ${user}. Computer picked ${comp}. Game ${result}`
  score_area.textContent = `Won:${score.won}, Lost:${score.lost}, Tie:${score.tie}`

}

let score = {won:0,lost:0,tie:0}

console.log(score)

function chooseCompMove(){
  const random = Math.floor(Math.random()*3)+1
  if(random === 1){
    comp_move ="Paper"
  }
  else if(random ===2){
    comp_move ="Rock"
  }
  else{
    comp_move ="Scissor"
  }
}


function playGame(userMove){
  

  chooseCompMove()

  let resultArea = document.querySelector(".js-result-area")


  

  if(userMove === "Rock"){
    if(comp_move === "Rock"){
      score.tie += 1
      displayScore("Rock","Rock","Tie",resultArea)
    }
    else if(comp_move === "Scissor"){
      score.won += 1
      displayScore("Rock","Scissor","Won",resultArea)
    }
    else{
      score.lost += 1
      displayScore("Rock","Paper","Lost",resultArea)
  
    }
  }

  if(userMove === "Paper"){
    if(comp_move === "Paper"){
      score.tie += 1
      displayScore("Paper","Paper","Tie",resultArea)

    }
    else if(comp_move === "Scissor"){
      score.won += 1
      displayScore("Paper","Rock","Won",resultArea)
    }
    else{
      score.lost += 1
      displayScore("Paper","Scissor","Lost",resultArea)
  
    }
  }


  if(userMove === "Scissor"){
    if(comp_move === "Scissor"){
      score.tie += 1
      displayScore("Scissor","Scissor","Tie",resultArea)
    }
    else if(comp_move === "Paper"){
      score.won += 1
      displayScore("Scissor","Paper","Won",resultArea)
    }
    else{
      score.lost += 1
      displayScore("Scissor","Rock","Lost",resultArea)
  
    }
  }

}



function resetGame(){

  score = {won:0,lost:0,tie:0}
  score_area.textContent = `Won:${score.won}, Lost:${score.lost}, Tie:${score.tie}`

}

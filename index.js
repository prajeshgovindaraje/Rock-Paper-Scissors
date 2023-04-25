
const rock_btn = document.getElementById("rock-btn")
const paper_btn = document.getElementById("paper-btn")
const scissor_btn = document.getElementById("scissor-btn")
let comp_move =" "


function message(user,comp,result){
  alert(`You picked ${user}. Computer picked ${comp}. Game ${result} 
Won-${score.won}. Lost-${score.lost}. Tie-${score.tie}`)
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

  

  if(userMove === "Rock"){
    if(comp_move === "Rock"){
      score.tie += 1
      message("Rock","Rock","Tie")
    }
    else if(comp_move === "Scissor"){
      score.won += 1
      message("Rock","Scissor","Won")
    }
    else{
      score.lost += 1
      message("Rock","Paper","Lost")
  
    }
  }

  if(userMove === "Paper"){
    if(comp_move === "Paper"){
      score.tie += 1
      message("Paper","Paper","Tie")

    }
    else if(comp_move === "Scissor"){
      score.won += 1
      message("Paper","Rock","Won")
    }
    else{
      score.lost += 1
      message("Paper","Scissor","Lost")
  
    }
  }


  if(userMove === "Scissor"){
    if(comp_move === "Scissor"){
      score.tie += 1
      message("Scissor","Scissor","Tie")
    }
    else if(comp_move === "Paper"){
      score.won += 1
      message("Scissor","Paper","Won")
    }
    else{
      score.lost += 1
      message("Scissor","Rock","Lost")
  
    }
  }

}





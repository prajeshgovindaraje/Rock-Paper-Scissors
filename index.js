const random = Math.floor(Math.random()*3)+1
const rock_btn = document.getElementById("rock-btn")
const paper_btn = document.getElementById("paper-btn")
const scissor_btn = document.getElementById("scissor-btn")


function message(user,comp,result){
  alert(`You picked ${user}. Computer picked ${comp}. Game ${result}`)
}


let comp_move =" "
  if(random === 1){
    comp_move ="Paper"
  }
  else if(random ===2){
    comp_move ="Rock"
  }
  else{
    comp_move ="Scissor"
  }
console.log(comp_move)

rock_btn.addEventListener("click",function(){
  if(comp_move == "Rock"){
    message("Rock","Rock","Tie")
  }
  else if(comp_move == "Scissor"){
    message("Rock","Scissor","Won")
  }
  else{
    message("Rock","Paper","Lost")

  }
})

paper_btn.addEventListener("click",function(){
  if(comp_move == "Paper"){
    message("Paper","Paper","Tie")
  }
  else if(comp_move == "Scissor"){
    message("Paper","Rock","Won")
  }
  else{
    message("Paper","Scissor","Lost")

  }
})

scissor_btn.addEventListener("click",function(){
  if(comp_move == "Scissor"){
    message("Scissor","Scissor","Tie")
  }
  else if(comp_move == "Paper"){
    message("Scissor","Paper","Won")
  }
  else{
    message("Scissor","Rock","Lost")

  }
})




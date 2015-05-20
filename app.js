var form = document.querySelector("FORM");
//setup variables
var gameChoices = ["rock", "paper", "scissor"];
var computerChoice = gameChoices[Math.floor(Math.random() *3)];
var humanChoice = "";
console.log(computerChoice);
var wins = 0;
var loses = 0;
var ties = 0;
var winText = document.getElementById("wins");
var loseText = document.getElementById("loses");
var tieText = document.getElementById("ties");


form.addEventListener("click", function(e){
  humanChoice = e.srcElement.value;
  match(humanChoice, computerChoice);
  computerChoice = gameChoices[Math.floor(Math.random() *3)];
  console.log(computerChoice + " new computerChoice")
  // setTimeout this
  setTimeout(function(){form.reset()}, 400);

});


function match(h,c) {
  if (h === c) {
        alert('Tie!');
        ties++;
        tieText.innerHTML = "Ties - " + ties;
  }
  else if (c === "paper" && h === "rock" ||
         c === "scissor" && h === "paper" ||
         c === "rock" && h === "scissor") {
                alert('You Lose!');
                loses++;
                loseText.innerHTML = "Loses - " + loses;
  }
  else if (h === "paper" && c === "rock" ||
         h === "scissor" && c === "paper" ||
         h === "rock" && c === "scissor") {
                alert('You Win!');
                wins++;
                winText.innerHTML = "Wins - " + wins;
  }
}





// function match(h, c) {
//   if (h === "rock") {
//     if (c === "rock") {
//       ties++;
//       tieText.innerHTML = "Ties - " + ties;
//       humanChoice.checked = false;
//     }else if (c === "scissor") {
//       wins++;
//       winText.innerHTML = "Wins - " + wins;
//     } else {
//       loses++;
//       loseText.innerHTML = "Loses - " + wins;
//     }
//   }

//   if (h === "paper") {
//     if (c === "paper") {
//       ties++;
//       tieText.innerHTML = "Ties - " + ties;

//     }else if (c === "rock") {
//       wins++;
//       winText.innerHTML = "Wins - " + wins;
//     } else {
//       loses++;
//       loseText.innerHTML = "Loses - " + wins;
//     }
//   }

//   if (h === "scissor") {
//     if (c === "scissor") {
//       ties++;
//       tieText.innerHTML = "Ties - " + ties;

//     }else if (c === "paper") {
//       wins++;
//       winText.innerHTML = "Wins - " + wins;
//     } else {
//       loses++;
//       loseText.innerHTML = "Loses - " + wins;
//     }
//   }
// }

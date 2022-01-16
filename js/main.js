//X => <i class="fas fa-times"></i>
//O => <i class="fas fa-circle-notch"></i>

//Selecting All "Starting Page" Tags
let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose");

//Selecting All "Main Page " Tags
let mainPage = document.querySelector("#mainPage")
let showChange = document.querySelector("#showChange")
let boxes= document.querySelectorAll(".boxes")

// Selecting all the winner pages
let winner = document.querySelector("#winner")
let winnerName = document.querySelector("#winnerName")
let quit = document.querySelector("#quit")

// how can  we change turns
//False => X's Turns
// True => O's Turns
let changeTurn = null ;

//Select  which one you want to be >
//X or O
choose.forEach(chooseNow =>{
    chooseNow.addEventListener("click" , ()=>{
        if(chooseNow.id === "playerX"){
            changeTurn = false;
            //console.log(changeTurn);
            showChange.style.left = '0px'
        }else {
            changeTurn = true;
          //console.log(changeTurn); 
          showChange.style.left = '160px'
        }
        startingPage.style.display = "none ";
        mainPage.style.display = "block"
    })
})

boxes.forEach(items =>{
    items.addEventListener("click" , ()=>{
        //Add "X " Icon If "ChangeTurn" = false
        //Add "O" Icon  if "Chage TUrn " = true 
        if(changeTurn ==false){
        items.innerHTML = '<i class="fas fa-times"></i>';
        items.id = "X";
        items.style.pointerEvent ="none ";
        showChange.style.left = "160px";

        //change The "changeTurn Value False Into True  "
           changeTurn = true
           
        }else{
            items.innerHTML = '<i class="fas fa-circle-notch"></i>';
            items.id = "O";
            items.style.pointerEvent ="none ";
            showChange.style.left = "0px";

            //change The "changeTurn Value False Into True  "
           changeTurn = false
        }
        winningFunc();
        drawFunc();
    })
})

//All Possible Winning Combinations
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
]

let winningFunc =()=>{
   for (let a = 0; a <= 7; a++){
       let b = winningCombinations[a];
     //  console.log(b)
     if(boxes[b[0]].id == ""|| boxes[b[1]].id == "" || boxes[b[2]].id == "" ){
         continue;
     }else if(boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X"){
         console.log(" X is Winner ")

        // Winner text 
        winnerName.innerText= "Player X Wins The Game"

        // show "Winner Page " &  hise the main page 
        mainPage.style.display ="none";
        winner.style.display ="block";

     }else if(boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O"){
            console.log(" O is Winner ")
  
        // Winner text 
        winnerName.innerText= "Player O Wins The Game"

        // show "Winner Page " &  hise the main page 
        mainPage.style.display ="none";
        winner.style.display ="block";
     }
     else{
         continue;
     }
   }
}
// Match Draw Function
let drawFunc = ()=>{
    if(boxes[0].id != "" && boxes[1].id !="" &&
    boxes[2].id !="" && boxes[3].id !=""&&
    boxes[4].id !="" && boxes[5].id !=""&&
    boxes[6].id !="" && boxes[7].id !=""&&  boxes[8].id !="" ){
        //Adding Draw Text
        winnerName.innerText= "Match Draw!"

        // show "Winner Page " &  hise the main page 
        mainPage.style.display ="none";
        winner.style.display ="block";
    }
}

quit.addEventListener("click" , ()=>{
    window.location.reload();
    
})
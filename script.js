// 1-les definition
const choices= ["Rock", "Paper","Scissors"];
const buttons = document.querySelectorAll('.buttons button');


//2- les fonctions necessaires

function randInt(max){
    return Math.floor(Math.random()*max);
}
function getComputerChoice(){
    return choices[randInt(choices.length)];
}
function capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
}
function playRound(playerSelection,computerSelection){
    let player=capitalize(playerSelection);
    let computer=capitalize(computerSelection);
    
    let player_index=choices.indexOf(player);
    let computer_index=choices.indexOf(computer);
    let win =new Number();
    
    if ((player_index===0 && computer_index===1) || (player_index===1 && computer_index===2) ||(player_index===2 && computer_index===0))
    {
        win = 0;
    }else if(player_index === computer_index ){
        win=2;
    }else{
        win=1;
    }
    const text="computer :"+computer+"</br>"+"\n you : "+player;
    if (win===0){
        return text+"</br> you lost ! ";
    }else if(win===1){
        return text+"</br>you win ! ";
    }else if(win===2){
        return text+"</br>nobody win!";
    }

}

// 3-les ecouteurs
var computerSelection=getComputerChoice();
const div=document.querySelector(".resultat");

buttons.forEach((button) =>{
    const playerSelection_function =function(){
        var playerSelection=button.id
        var computerSelection=getComputerChoice();
        div.innerHTML=playRound(playerSelection,computerSelection);
    }
    button.addEventListener('click',playerSelection_function);
});
   

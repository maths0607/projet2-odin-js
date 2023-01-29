// 1-les definition
const choices= ["Rock", "Paper","Scissors"];
const buttons = document.querySelectorAll('.buttons button');
var computerSelection ,
     playerSelection,
    scorePlayer=0,scoreComputer=0;
const div=document.querySelector(".resultat"),
    score=document.querySelector(".score");


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
    div.style.color="#554151";
    
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
        scoreComputer++;
        return text+"</br> you lost ! ";
    }else if(win===1){
        scorePlayer++;
        return text+"</br>you win ! ";
        
    }else if(win===2){
        return text+"</br>nobody win!";
    }
    

}

// 3-les ecouteurss

buttons.forEach((button) =>{
    const playerSelection_function =function(){
        playerSelection=button.id
        computerSelection=getComputerChoice();
        div.innerHTML=playRound(playerSelection,computerSelection);
        juge({"JscoreComputer" : scoreComputer,"JscorePlayer":scorePlayer});
        score.innerHTML="<div>player :"+scorePlayer+"</div>"+"<div>computer:"+scoreComputer+"</div>";
        
    }
    button.addEventListener('click',playerSelection_function);
});

const juge = function(objet){
    
    if(objet.JscoreComputer==5 || objet.JscorePlayer==5){
        
        if(objet.JscoreComputer==5){
            div.innerHTML= "You lost the game";
        } else if(objet.JscorePlayer==5){
            div.innerHTML="You win the game";
        }
        div.style.color="green";
        scoreComputer=0;
        scorePlayer=0;
    } 
}
   

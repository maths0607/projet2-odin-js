const choices= ["Rock", "Paper","Scissors"];

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
    console.log("computer :"+computer+"\n you : "+player)
    if (win===0){
        return "\nyou lost ! ";
    }else if(win===1){
        return "you win ! ";
    }else if(win===2){
        return "nobody win!";
    }

}


for(let i = 0; i < 5; i++){
    
    do{
        var playerSelection = capitalize(prompt("Entrez : "));
        if(choices.indexOf(playerSelection) === -1){console.log("erreur");}
    }while(choices.indexOf(playerSelection) === -1)
    
    var computerSelection=getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
}

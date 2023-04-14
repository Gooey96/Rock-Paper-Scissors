//Function that randomly select 3 option for the computer
function getComputerChoice() { 
    let choice1 ="rock";
    let choice2 ="paper";
    let choice3 ="scissors";
    const random =(Math.floor(Math.random() * 3) + 1);

    if (random <=1) {
        return choice1;
    }else if (random <=2) {
        return choice2;
    }else {
        return choice3;
    }
}

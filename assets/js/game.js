// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less

function fight(){
    window.alert("The fight has begun!");
}
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// create function
var fight = function(enemyName){
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if(promptFight === "fight" || promptFight === "FIGHT"){
    // remove enemy's health by subtracting the amount set in the playerAttack variable.
    
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    
    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
    )

    //check enemy's health
    if(enemyHealth <= 0){
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    //check player's health
    if(playerHealth <= 0){
        window.alert(playerName + " has died!");
    }
    else{
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }
    // if player choses to skip
    } else if(promptFight === "skip" || promptFight === "SKIP"){
        window.alert(playerName + " has chosen to skip the fight!");
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes(true), leave fight
        if(confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no(false), ask question again by running fight() again
        else{
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};
// execute function

console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
console.log(10 + 10);

//what is this?
console.log("Our robot's " + playerName);
var name = "Lorreina";
console.log(name)

console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}
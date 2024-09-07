let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice img");       // Accessing the choice class
const msg = document.querySelector("#msg");                     // Accessing the msg id
const userScorePara = document.querySelector("#user-score");    // Accessing the user score id
const aiScorePara = document.querySelector("#ai-score");        // Accessing the ai score id 


const genAiChoice = () =>{      // 4. Created a function that will make random choices 
    const option = ["rock","paper","scissors"]
    const ranIdx= Math.floor(Math.random()*3); // So this will generate random floor values till 3
    return option[ranIdx]
};

const drawGame = () =>{
    console.log("game was a DRAW.");
    msg.innerText = "DRAW :\ AGAIN";
 };


const showWinner = (userWin,userChoice,aiChoice) =>{        // Show Winner function updates the score changes the score and text
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `YOU WIN :) ${userChoice} beats ${aiChoice}`;
    }
    else{
        aiScore++;
        aiScorePara.innerText = aiScore;
        console.log("AI Wins");
        msg.innerText = `AI WIN :( ${aiChoice} beats ${userChoice} `;
    }
};


const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const aiChoice = genAiChoice();        // 3. Created a variable that will have ai choice 
    console.log("ai choice = ", aiChoice);

    if(userChoice === aiChoice){        // 5. Created the rock paper scissor system 
        drawGame();
    }
    else{
        let userWin = true;             // Predefined condition if the user wins
        if(userChoice === "rock"){
             userWin = aiChoice ==="paper" ? false : true 
        }else if(userChoice === "paper"){
            userWin = aiChoice === "scissor" ? false : true
        }else if(userChoice === "scissor"){
            userWin = aiChoice === "rock" ? false : true
        }
        showWinner(userWin,userChoice,aiChoice)     //6. Both of the choices are passed into showWinner and userWin 
    }

};


choices.forEach((choice) =>{ // This reads the choice every time the user clicks
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id"); // 1.taking user id or the choice 
        console.log("choice was clicked :: " , userChoice );
        playGame(userChoice);   // 2.passing it into playGame function 
    });
});
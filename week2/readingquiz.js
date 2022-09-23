/*//declares a variable question and assigns a string
const question = "What is Superman's real name?"

//this is asking the question variable in a dialog box. Prompt lets the user respond to the question and save their answer in the variable answer.
const answer = prompt(question);

//Showing the users answer in an alert box. 
alert('You answered ${answer}');

//arrays name is quiz, each element in the array has a question in the first element and the answer in the second. 
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

//create and initialize the variable score
let score = 0 

//loop through array, assign question and answer to each key and value in the map.
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert('Wrong! The correct answer was ${answer}');
    }
}

//Report the players score
alert('Game Over, you scored ${score} points');*/

//map of questions stored in a variable
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

//create a function called start(). starting the score at 0.
function start(quiz){
    let score = 0;

    //main game loop, iterates quiz array and invokes the ask and check functions.
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }

    //end of game loop when the array has gone through all the questions
    gameOver();

    //function declarations
    function ask(question){
        return prompt(question);
    }

    function check(response,answer){
        if(response === answer){
            alert('Correct!');
            score++;
        }else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

//This is required to actually start the quiz. 
start(quiz);
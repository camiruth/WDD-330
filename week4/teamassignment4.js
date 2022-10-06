let isPlayerOne = true;

let elements = document.getElementsByClassName("box");

let winner = function(elements) {
    console.log('elements', elements);
    let result = elements[0].innerHTML;
    console.log('result', result);
    for (let i = 0; i < elements.length; i++){
        if (result === elements[i].innerHTML) {
            continue;
        } else {
            return '';
        }
    }
    if (result) return `${result} won!`;
    return "";
}

let checkForWinners = function(){
    let table = document.getElementById("tableBoard");

    //check the first row for winners.
    let firstRow = table.children[0].children[0].children;
    if (winner(firstRow)) alert(winner(firstRow));

    //check the second row for winners.
    let secondRow = table.children[0].children[1].children;
    if (winner(secondRow)) alert(winner(secondRow));

    //check the third row for winners.
    let thirdRow = table.children[0].children[2].children;
    if (winner(thirdRow)) alert(winner(thirdRow));

    //check the first column for winners.
    let firstColumnFirstBox = table.children[0].children[0].children[0];
    let firstColumnSecondBox = table.children[0].children[1].children[0];
    let firstColumnThirdBox = table.children[0].children[2].children[0];
    if (winner([firstColumnFirstBox, firstColumnSecondBox, firstColumnThirdBox ])) alert(winner([firstColumnFirstBox, firstColumnSecondBox, firstColumnThirdBox ]));

    //check the second column for winners.
    let secondColumnFirstBox = table.children[0].children[0].children[1];
    let secondColumnSecondBox = table.children[0].children[1].children[1];
    let secondColumnThirdBox = table.children[0].children[2].children[1];
    if (winner([secondColumnFirstBox, secondColumnSecondBox, secondColumnThirdBox ])) alert(winner([secondColumnFirstBox, secondColumnSecondBox, secondColumnThirdBox ]));

    //check the third column for winners.
    let thirdColumnFirstBox = table.children[0].children[0].children[2];
    let thirdColumnSecondBox = table.children[0].children[1].children[2];
    let thirdColumnThirdBox = table.children[0].children[2].children[2];
    if (winner([thirdColumnFirstBox, thirdColumnSecondBox, thirdColumnThirdBox ])) alert(winner([thirdColumnFirstBox, thirdColumnSecondBox, thirdColumnThirdBox ]));

    //check the forward diagonal for winners.
    let forwardDiagonalFirstBox = table.children[0].children[0].children[0];
    let forwardDiagonalSecondBox = table.children[0].children[1].children[1];
    let forwardDiagonalThirdBox = table.children[0].children[2].children[2];
    if (winner([forwardDiagonalFirstBox, forwardDiagonalSecondBox, forwardDiagonalThirdBox ])) alert(winner([forwardDiagonalFirstBox, forwardDiagonalSecondBox, forwardDiagonalThirdBox ]));

    //Check the backward diagonal for winners.
    let backwardDiagonalFirstBox = table.children[0].children[0].children[2];
    let backwardDiagonalSecondBox = table.children[0].children[1].children[1];
    let backwardDiagonalThirdBox = table.children[0].children[2].children[0];
    if (winner([backwardDiagonalFirstBox, backwardDiagonalSecondBox, backwardDiagonalThirdBox ])) alert(winner([backwardDiagonalFirstBox, backwardDiagonalSecondBox, backwardDiagonalThirdBox ]));
} 

let checkForTie = function(){
    let tie = document.getElementsByClassName("box");
    for (let i = 0; i < elements.length; i++){
        if(!tie[i].innerHTML) return;
    }
    alert("Tie Game");
}

let myFunction = function(event) {
    if (event.target.innerHTML) return;
    if (isPlayerOne){
        event.target.innerHTML = "X";
    }
    else {
        event.target.innerHTML = "O";
    }
    isPlayerOne = !isPlayerOne;
    checkForWinners();
    checkForTie();
}

let reset = function() {
    let clear = document.getElementsByClassName("box");
    for (let i = 0; i < elements.length; i++){
        clear[i].innerHTML = "";
    }
    // location.reload()
}




for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener('touchend', myFunction);
    elements[i].addEventListener('click', myFunction);
}

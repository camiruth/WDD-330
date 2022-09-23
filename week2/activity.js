// Part 1 exercise writing the code from the input to the div.
    //Function declaration when button is clicked
    function getInputValue() {
        // Selecting the input element and get its value 
        let inputVal = document.getElementById("inputId").value;
  
        let div = document.getElementById("inputValue");
        div.innerHTML = `Your submission is = ${inputVal}`;
      }
  
      //Part 2 
      function sumNumbers() {
        let numberVal = document.getElementById("numberId").value;
        let result = document.getElementById("numberValue");
        result.innerHTML = `Your number entered is = ${answer(numberVal)}`;
      }
  
      //stretch assignment function expression
      const answer = function (number){
        if (isNaN(number)) return "Must be a valid number";
        if (!Number.isInteger(parseFloat(number))) return "Must be an integer";
        if (parseFloat(number) < 1) return "Must be a positive interger";
  
        let sum = 0; 
        for (let i = 1; i <= number; i++) {
          sum = sum + i;
        }
        return sum;
      }
  
      
      //Part 3. Adding and multiplying two numbers from different input boxes. 
      //Subtract and Multiply was added as a stretch assignment.
      //Stretch Assignment DRY of getting inputs oneVal and twoVal
      function getInputNumbers(){
        let oneVal = document.getElementById("input1Number").value;
        let twoVal = document.getElementById("input2Number").value;
        return {oneVal,twoVal};
      }
  
      function add() {
        const {oneVal,twoVal} = getInputNumbers();
        let div = document.getElementById("addResults");
        div.innerHTML = `The sum is = ${parseInt(oneVal) + parseInt(twoVal)}`;
      }
  
      //Stretch Assignment Arrow Function
      const subtract = () => {
        const {oneVal,twoVal} = getInputNumbers();
  
        let div = document.getElementById("addResults");
        div.innerHTML = `The difference is = ${parseInt(oneVal) - parseInt(twoVal)}`;
      }
  
      function multiply() {
        const {oneVal,twoVal} = getInputNumbers();
  
        let div = document.getElementById("addResults");
        div.innerHTML = `The product is = ${parseInt(oneVal) + parseInt(twoVal)}`;
      }
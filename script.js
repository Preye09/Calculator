

let currentInput="";
let firstNumber=null;
let operator=null;

let history = "";


function appendNumbers(number){
    currentInput = currentInput + number;

    document.getElementById("display").value = currentInput;
}

function setOperators(op){
    if(currentInput === "" && op === "-"){
        currentInput = "-";
   document.getElementById("display").value = "-" + " ";
       return;
    }
    if (currentInput === "")
       return;
    
    firstNumber= Number(currentInput);
    operator = op;
    currentInput= "";

    document.getElementById("display").value = firstNumber + " " + op;
       return;
} 

function calculate(){

    secondNumber = Number(currentInput);

    let result;
    if(operator === "+"){
        result = firstNumber + secondNumber;
    }
    else if(operator === "-"){
        result = firstNumber - secondNumber;
    }
    else if(operator === "*"){
        result = firstNumber * secondNumber;
    }
    else if(operator === "/"){
        if(secondNumber === 0){
            result = "undefined";
        }
        else{
            result = firstNumber / secondNumber;
        }
    }

    document.getElementById("display").value = result;
    if(typeof result == "number" || result !== "undefined"){
        history = history + firstNumber + " " + operator + " " + secondNumber + "=" + result ;
        document.getElementById("history").textContext = history;
    }

    currentInput = String(result);
    firstNumber = null;
    operator = null;



}

function clearDisplay(){
    currentInput = "";
    firstNumber = null;
    operator = null;

    document.getElementById("display").value = "";
}

function appendDecimal(){
    if(currentInput.includes("."))
        return;
    
    
    if(currentInput=""){
        currentInput="0."
    }
    else{
        currentInput =  currentInput + ".";
    }

    document.getElementById("display").value = "0.";
}
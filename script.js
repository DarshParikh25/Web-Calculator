let display = document.getElementById('display');
let currentInput = '';

function clearDisplay(){
    currentInput = '';
    updateDisplay();
}

function appendCharacter(char){
    currentInput += char;
    updateDisplay();

}
function deleteCharacter(){
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
function calculateTotal(){
    try{
        currentInput = eval(currentInput).toString();
    }
    catch(error){
        currentInput = 'Error';
    }
    updateDisplay();
}

function calculatePercentage(){
    try{
        currentInput = (eval(currentInput) / 100).toString();
    }
    catch(error){
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay(){
    display.textContent = currentInput;
}
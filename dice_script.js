// add a click handler on button to call function

//crate function when button clicked to roll dice

function rollDice() {
//step 1: get number from input
    let number = document.getElementById("dice-input").value;
//step 2: generate random whole number from 1 to n
    let result = Math.ceil(Math.random() * number);
//step 3: display results on screen
    document.getElementById("result").innerHTML = result
}
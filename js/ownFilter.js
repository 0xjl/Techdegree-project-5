let counter;
let box;
let text;
document.getElementById("userinput").addEventListener("keyup", userInput);

function userInput() {
    const userInput = document.getElementById("userinput").value;
    const uppedInput = userInput.toUpperCase();
    console.log(uppedInput);
} 

for (let i = 1; i <= 12; i++) {
    counter =+ i;
    box = document.getElementById(`box${counter}`)
    text = box.getAttribute("data-caption");
    console.log(text)
}













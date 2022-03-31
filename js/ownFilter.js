let counter;
let box;
let text;

document.getElementById("userinput").addEventListener("keyup", userInput);

function userInput() {
    const userInput = document.getElementById("userinput").value.toLowerCase()
    for (let i = 1; i <= 12; i++) {
    counter =+ i;
    box = document.getElementById(`box${counter}`)
    text = box.getAttribute("data-caption");
    if (text.includes(userInput) === true) {
        box.style.display="inline-block";
    } else {
        box.style.display="none";
    }
}
} 














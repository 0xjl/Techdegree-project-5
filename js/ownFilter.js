let boxes = document.getElementsByTagName("a");
let counter;
let box;
let text;

function userInput() {
    const userInput = document.getElementById("userinput").value.toLowerCase()
    for (let i = 1; i <= boxes.length; i++) {
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

document.getElementById("userinput").addEventListener("keyup", userInput);















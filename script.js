const text = document.querySelector("#text");
const speed = document.querySelector("#speed");

const message = "Some text content goes here!";
let speedValue = 300 / Number(speed.value);
let index = 1;

const writeText = () => {
    text.textContent = message.slice(0, index);
    index += 1;

    if(index > message.length){
        index = 1;
    } 

    setTimeout(writeText, speedValue);
}

writeText();

speed.addEventListener("change", () => {
    speedValue = 300 / Number(speed.value);
});

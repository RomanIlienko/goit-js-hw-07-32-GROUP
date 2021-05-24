const inptRollEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inptRollEl.addEventListener("input", fontSizeRoll);

function fontSizeRoll(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
};
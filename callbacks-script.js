const callbackBtn = document.getElementsByTagName("button")[0];
const div = document.getElementsByClassName("update-text")[0];

callbackBtn.addEventListener("click", updateText);

function updateText(event) {
    setTimeout(() => div.innerHTML = "Callback executed after 5 seconds", 5000);
}
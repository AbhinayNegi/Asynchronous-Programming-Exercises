const button = document.getElementsByTagName("button")[0];
const callbackMsg = document.getElementById("promiseMsg");
const containerDiv = document.getElementsByClassName("container")[0];
const dataDiv = document.getElementsByClassName("data")[0];

button.addEventListener("click", getData);
function getData() {
    const prom = new Promise(function(resolve, reject) {
        resolve(fetch("https://dummyjson.com/posts"));
    })

    let count = 0;
    console.log(prom);
    let timer = setInterval(function() {
    count++;
    console.log(count + " second(s) have passed");
    if (count > 5) {
        clearInterval(timer);
        console.log("More than 5 seconds have passed");
        console.log(prom.then(result => result.json().then(result => console.log(result))));
    }
    }, 1000);

    
}
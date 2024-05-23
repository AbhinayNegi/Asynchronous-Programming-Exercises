const button = document.getElementsByTagName("button")[0];
const callbackMsg = document.getElementById("promiseMsg");
const containerDiv = document.getElementsByClassName("container")[0];
const dataDiv = document.getElementsByClassName("data")[0];

button.addEventListener("click", getData);
async function getData(event) {
    data = await fetchData();
    console.log(data);
}

async function fetchData() {
    let timeout;
    const timeoutPromise = new Promise((resolve, reject) => {
        timeout = setTimeout(() => {
            reject("Could not fetch data within 5 seconds");
        }, 5000);        
    });

    let fetchedData = await fetch("https://fakeresponder.com/?sleep=7000");
    let converted = await fetchedData.json();
    clearTimeout(timeout);
    return converted;
}
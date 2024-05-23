const button = document.getElementsByTagName("button")[0];
const callbackMsg = document.getElementById("promiseMsg");
const containerDiv = document.getElementsByClassName("container")[0];
const dataDiv = document.getElementsByClassName("data")[0];

button.addEventListener("click", getData);
async function getData(event) {
    callbackMsg.innerHTML = "Loading... Please wait.";
    try {
        data = await fetchData();
        callbackMsg.innerHTML = "Data fetched within 5 seconds.";
        // Getting array of posts
        const posts = data.posts;
        // For every post  we are creating a div element adding class to its attribute
        // And setting its inner html to the post title then appending the div to container
        posts.forEach((post) => {
            let postDiv = document.createElement("div");
            postDiv.setAttribute("class", "post-titles");
            postDiv.innerHTML = post.title;
            dataDiv.appendChild(postDiv);
        })
    } catch (error) {
        callbackMsg.innerHTML = error;
    }

}

async function fetchData() {
    // Sets a timeout to reject the promise after 5 seconds if data fetch fails.
    const timeoutPromiseStatus = new Promise((resolve, reject) => {
        setTimeout(() => reject("Could not load data within 5 minutes"), 5000);
    })

    // Fetches data from the specified URL and converts it to a JavaScript object
    const fetchedData = fetch("https://dummyjson.com/posts")
        .then(response => response.json())
        .then(data => data);

    // We are calling Promise.race function that takes array of promises 
    // and whichever promise resolves or reject first it will create another promise for that and returns it
    // If fetch API taking longer than 5 seconds that in that case the timeout callback will run and reject the promise and then the Promise.race will also return promise with reject status.
    // If fetch API fetches the data before 5 seconds then Promise.race returns promise with resolved status
    return Promise.race([timeoutPromiseStatus, fetchedData]);
}
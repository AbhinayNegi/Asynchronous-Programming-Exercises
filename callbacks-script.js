const button = document.getElementsByTagName("button")[0];
const callbackMsg = document.getElementById("callBackMsg");
const containerDiv = document.getElementsByClassName("container")[0];

button.addEventListener("click", fetchData);
function fetchData() {

    setTimeout(displayData, 5000);
}

function displayData() {

    callbackMsg.innerHTML = "Callback executed after 5 seconds"

    let data = fetch("https://dummyjson.com/posts");

    const heading = document.createElement("h2");
    heading.innerHTML = "POST TITLES";
    containerDiv.appendChild(heading);
    
    data.then(response => response.json())
    .then(data => {
        const posts = data.posts;
        posts.forEach(post => {
            let postDiv = document.createElement("div");
            postDiv.setAttribute("class", "post-titles");
            postDiv.innerHTML = post.title;
            containerDiv.appendChild(postDiv);
        })
    })
}

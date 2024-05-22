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

    //Creating heading for the posts
    const heading = document.createElement("h2");
    heading.innerHTML = "POST TITLES";
    containerDiv.appendChild(heading);
    
    // Getting the response and converting the json data
    data.then(response => response.json())
    .then(data => {
        // Getting array of posts
        const posts = data.posts;
        // For every post  we are creating a div element adding class to its attribute
        // And setting its inner html to the post title then appending the div to container
        posts.forEach(post => {
            let postDiv = document.createElement("div");
            postDiv.setAttribute("class", "post-titles");
            postDiv.innerHTML = post.title;
            containerDiv.appendChild(postDiv);
        })
    })
}

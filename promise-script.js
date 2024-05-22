const button = document.getElementsByTagName("button")[0];
const callbackMsg = document.getElementById("promiseMsg");
const containerDiv = document.getElementsByClassName("container")[0];
const dataDiv = document.getElementsByClassName("data")[0];

button.addEventListener("click", getData);
function getData(event) {
  callbackMsg.innerHTML = "Loading... Please wait";

  fetchData().then((data) => {
    callbackMsg.innerHTML = "Data fetched within 5 seconds."
    // Getting array of posts
    const posts = data.posts;
    // For every post  we are creating a div element adding class to its attribute
    // And setting its inner html to the post title then appending the div to container
    posts.forEach((post) => {
      let postDiv = document.createElement("div");
      postDiv.setAttribute("class", "post-titles");
      postDiv.innerHTML = post.title;
      dataDiv.appendChild(postDiv);
    });
  }).catch(error => {
    callbackMsg.innerHTML = `Error :${error}`;
  });
}

// Set a timeout of 5 seconds for the fetch operation.
// Code execution can continue concurrently.

// The browser's Fetch API will be used to retrieve data.
// Upon successful retrieval, the response block will execute.

// If the fetch operation fails to retrieve data within 5 seconds,
// the timeout will trigger and reject the promise with an error.

// The `clearTimeout` function is used to cancel the timeout if
// the fetch operation completes successfully before the timeout expires.

function fetchData() {

  return new Promise((resolve, reject) => {

    let timeout = setTimeout(() => {
        // If this line execute that means the featch API could not featch data within 5 seconds.
      reject("Could not fetch data from the API within 5 seconds.");
    }, 5000);

    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // This line cancel the timeout of 5 seconds as it is no longer needed since our fetch api has fetched the data
        clearTimeout(timeout);
        resolve(data);
      })
      .catch((error) => {
        reject("Could not fetch data");
      });
  });
}

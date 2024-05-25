  // getting the id of the Element to manipulate its innerHTML or innerTEXT
  const jokeEl = document.getElementById("joke");
  
const jokeBtn = document.getElementById("jokeBtn"); //not used in this

// extracting the selected genre from thr local storage
let genre = localStorage.getItem(1);

// function to fetch the joke from the server
// and to manipulate the document
async function generateJoke() {
  let url = "https://v2.jokeapi.dev/joke/" + genre;

  // use it for debugging
  // console.log(url);

  const res = await fetch(url); //requesting and retrieving the data from the server
  const data = await res.json(); //the returned json object is transformed

  if (data.type === "single") {
    jokeEl.innerHTML = data.joke;
  } else {
    jokeEl.innerHTML = `${data.setup} <br> ${data.delivery}`;
  }
  // use it for debugging
  // console.log(genre);
}

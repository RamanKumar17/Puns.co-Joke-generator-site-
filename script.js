let jokeGenre = 0;

function openNextPage(val) {
  // redirecting to next page
  location.href = "./jokePage.html?category=" + val;

  // saved the selected genre to a variable
  // anyhow it is not used
  jokeGenre = val;

  //inserting the selected genre into the local storage
  localStorage.setItem(1, val);
}

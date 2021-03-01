const searchButton = document.getElementById("search-btn");
const movieList = document.getElementById("movie-detail");
const imgFile = document.getElementById("img-file");
const figures = document.getElementById("figures");

const getMoviesDetails = async (event) => {
  event.preventDefault();
  let inputVal = document.getElementById("movies");
  let url = "http://www.omdbapi.com/?t=" + inputVal.value + "&apikey=7683df0a";
  const fetchMovies = await fetch(url);
  const moviesDetail = await fetchMovies.json();

  if (inputVal.value == "") {
    alert("Please Search Some Movies !!");
  } else {
    const createList = document.createElement("div");
    createList.classList.add("detail-list");
    createList.innerHTML = `
  <p>Name : ${moviesDetail.Title}</><br>
  <p>Actors : ${moviesDetail.Actors}</><br>
  <p>Released : ${moviesDetail.Released}</><br>
  <p>Length : ${moviesDetail.Runtime}</><br>
  <p>BoxOffice : ${moviesDetail.BoxOffice}</><br>
  <p>Country : ${moviesDetail.Country}</><br>
  <p>Director : ${moviesDetail.Director}</><br>
  <p>Writer : ${moviesDetail.Writer}</><br>
  <p>Genre : ${moviesDetail.Genre}</><br>
  <p>Language : ${moviesDetail.Language}</><br>
  <p>imdb Rating : ${moviesDetail.imdbRating}</><br>`;
    movieList.appendChild(createList);

    const createImg = document.createElement("figure");
    createImg.classList.add("figure");
    createImg.innerHTML = `<img
    src="${moviesDetail.Poster}"            
    id="img-file"
    class="figure-img img-fluid rounded"
    alt="movie-figures missing"
    />`;
    figures.appendChild(createImg);
    inputVal.value = "";
  }
};

searchButton.addEventListener("click", getMoviesDetails);

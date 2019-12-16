function searchMovie(keyword) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let movies = JSON.parse(xhr.response);
            showMovies(movies.Search);
        }
    }

    xhr.open('GET', 'http://www.omdbapi.com/?apikey=dcb99610&s=' + keyword);
    xhr.send();
}



function showMovies(movies) {
    let cards = '';

    movies.forEach(function (movie) {
        cards += `<div class="col-md-4 my-3">
            <div class="card mb-3" style="width: 18rem;">
                <img src="${movie.Poster}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <h6 class="card-subtitle mb-2">${movie.Year}</h6>
                    <a href="detail.php?id${movie.imdbID}" class="btn btn-primary">Show Detail</a>
                </div>
            </div>
        </div>`;
    });

    movieList.innerHTML = cards;
}

let movieList = document.querySelector('.movie-list');
let keyword = document.querySelector('.keyword');
let btn = document.querySelector('.searchBtn');

btn.addEventListener('click', function () {
    searchMovie(keyword.value);
    keyword.value = '';
});

searchMovie('harry');
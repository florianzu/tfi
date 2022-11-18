const apiKey = "925f4b20191d3e6290b49bd816600eda"
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=generos%20%3D%20&with_watch_monetization_types=flatrate`

fetch(url)
.then(function(response) {
    response.json()
})
.then(function (data) {
    console.log(data.results)
})
.catch(function (error) {
    console.log(error);
    return error
})

let apiKey = "925f4b20191d3e6290b49bd816600eda"
let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US"
let urlSeries =  "https://api.themoviedb.org/3/genre/tv/list?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US"
fetch(url)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    console.log(data.genres);
    let genero = document.querySelector(".titulo")
    let Peliculas = ""
    for (let index = 0; index < 5; index++) {
        const element = data.genres[index];
        Peliculas+=``
    }
    genero.innerHTML= Peliculas
})
.catch(function(error){
    console.log(error);
    return error
})

fetch(urlSeries)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    console.log(data.genres);
    let generos = document.querySelector(".titulo2")
    let Series = ""
    for (let index = 0; index < 5; index++) {
        const element = data.genres[index];
        Series+=``
    }
    generos.innerHTML = Series
})
.catch(function(error){
    console.log(error);
    return error
})
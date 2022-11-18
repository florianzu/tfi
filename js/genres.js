let apiKey = "925f4b20191d3e6290b49bd816600eda"
let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US"
let urlSeries =  "https://api.themoviedb.org/3/genre/tv/list?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US"
fetch(url)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    console.log(data.genres);
    let genero = document.querySelector(".generos1")
    let Peliculas = ""
    for (let index = 0; index < 5; index++) {
        const element = data.genres[index];
        
        Peliculas+=`
        <article class= generos>

         <p>${element.name}</p>
         
        </article>`
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
    let generos = document.querySelector(".generos  2")
    let Series = ""
    for (let index = 0; index < 5; index++) {
        const element = data.genres[index];
        
        Series+=`
        <article class= generos>
        
         <p>${element.name}</p>
         
        </article>`
    }
    generos.innerHTML = Series
})
.catch(function(error){
    console.log(error);
    return error

})
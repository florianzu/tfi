let apiKey = "925f4b20191d3e6290b49bd816600eda"
let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let urlMasvistas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
fetch(url)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    console.log(data.results);
    let container = document.querySelector(".container1")
    let Peliculas = ""
    for (let index = 0; index < 5; index++) {
        const element = data.results[index];
        
        Peliculas+=`
        <article class= cartelera>
        <a href="detail-movie.html?buscador=${element.id}">
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt='imagen' />
        </a>
             <p>Name:${element.title}</p>
             <p>Date: ${element.release_date} </p>
            </article>`
    }
    container.innerHTML= Peliculas
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
    console.log(data.results);
    let container = document.querySelector(".container2")
    let Series = ""
    for (let index = 0; index < 5; index++) {
        const element = data.results[index];
        
        Series+=`
        <article class= cartelera>
        <a href="detail-series.html?buscador=${element.id}"><img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt='imagen' /></a>
         <p>Name:${element.name}</p>
         <p>Date: ${element.first_air_date} </p>
        </article>`
    }
    container.innerHTML= Series
})
.catch(function(error){
    console.log(error);
    return error

})

fetch(urlMasvistas)
.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {
    console.log(data.results);
    let container = document.querySelector(".container3")
    let Mas_vistas = ""
    for (let index = 0; index < 5; index++) {
        const element = data.results[index];
        
        Mas_vistas+=`
        <article class= cartelera>
        <a href="detail-movie.html?buscador=${element.id}"><img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt='imagen' /></a>
         <p>Name:${element.title}</p>
         <p>Date: ${element.release_date} </p>
        </article>`
    }
    container.innerHTML= Mas_vistas
})
.catch(function(error){
    console.log(error);
    return error

})

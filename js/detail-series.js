let apiKey = "925f4b20191d3e6290b49bd816600eda"
let qs = location.search;
let qsObjeto = new URLSearchParams(qs);
let idseries = qsObjeto.get("buscador");
const url = `https://api.themoviedb.org/3/tv/${idseries}?api_key=${apiKey}&language=en-US`
let fav = document.querySelector(".clicFav")

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let container = document.querySelector('.detalle2')
        let contenido =
            `<article class= "contenedor">
        <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <h1>${data.name}</h1>
        <p class = "texto"> <u>Fecha de estreno</u>: ${data.first_air_date} </p>
        <p class = "texto" > <u>Duración</u>: ${data.episode_run_time} minutos </p>
        <p class = "texto" > <u>Calificación</u>: ${data.vote_average} </p>
        <p class = "texto" > <u>Sinópsis</u>: ${data.overview} </p>
        </article>
        `;
        container.innerHTML += contenido
    })
    .catch(function (error) {
        return error;
    });


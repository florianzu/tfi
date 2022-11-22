let apiKey = "925f4b20191d3e6290b49bd816600eda"
let qs = location.search;
let qsObjeto = new URLSearchParams(qs);
let idpeliculas = qsObjeto.get("buscador");
const url = `https://api.themoviedb.org/3/tv/${idpeliculas}?api_key=${apiKey}&language=en-US`


fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let container = document.querySelector('.detalle2')
        let contenido =
        `<article class= "contenedor">
        <img class = "fotofast" src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt='' /> 
        <h1>${data.title}</h1>
        <p class = "texto"> <u>Fecha de estreno</u>: ${data.release_date} </p>
        <p class = "texto" > <u>Duración</u>: ${data.runtime} minutos </p>
        <p class = "texto" > <u>Calificación</u>: ${data.vote_average} </p>
        <p class = "texto" > <u>Sinópsis</u>: ${data.overview} </p>
        </article>
        `;
        container.innerHTML += contenido
    })
    .catch(function (error) {
        return error;
    });


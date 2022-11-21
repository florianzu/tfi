
let apiKey = "925f4b20191d3e6290b49bd816600eda"
let detalle = location.search;
let detalleObjeto = new URLSearchParams(detalle);
let idpeliculas = detalleObjeto.get('idpeliculas');
const url = `https://api.themoviedb.org/3/tv/${idpeliculas}api_key=${apiKey}&language=en-US`


fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let container = document.querySelector('.detalle')
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

let favoritos = []

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage)
}

if (favoritos.includes(idpeliculas)) {
    fav.innerText = "Quitar de favoritos";
}

fav.addEventListener("click", function (e) {
    e.preventDefault();

    if (favoritos.includes(idpeliculas)) {
        let indice = favoritos.indexOf(idpeliculas)
        favoritos.splice(indice, 1);
        fav.innerText = "Agregar a Fav";
    } else {
        favoritos.push(idpeliculas)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString)
})



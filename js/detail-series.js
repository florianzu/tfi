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
        
        let favs = document.querySelector(".clicFav")

        let favoritostv = []

        let recuperoStorage = localStorage.getItem("favoritostv")

        if (recuperoStorage != null) {
            favoritostv = JSON.parse(recuperoStorage)
        }

        if (favoritostv.includes(idseries)) {
            favs.innerText = "Quitar de favoritos";
        }

        favs.addEventListener("click", function (e) {
            e.preventDefault();

            if (favoritostv.includes(idseries)) {
                let indice = favoritostv.indexOf(idseries)
                favoritostv.splice(indice, 1);
                favs.innerText = "Agregar a Favoritos";
            } else {
                favoritostv.push(idseries)
                favs.innerText = "Quitar de favoritos"
            }

            let favsToString = JSON.stringify(favoritostv);
            localStorage.setItem("favoritostv", favsToString);

            console.log(localStorage);
        });
    })
    .catch(function (error) {
        return error;
    });


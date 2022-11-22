let recuperoStorage = localStorage.getItem("favs")

let favoritos = JSON.parse(recuperoStorage)

console.log(favoritos);

let section = document.querySelector("#list");

let peliculasFavoritas = "";

if (favoritos == null || favoritos.length == 0) {
    /* No hay favoritos */
    section.innerHTML = '<p>No hay datos en favoritos<p/>'
} else {
    for (let i = 0; i < favoritos.length; i++) {

        let url = `https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=1`;

        fetch(url)
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (data) {

                peliculasFavoritas += ``
                section.innerHTML = peliculasFavoritas;
                return data;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            });

    };
}



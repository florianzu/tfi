let apiKey = "925f4b20191d3e6290b49bd816600eda"
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("search");
let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${busqueda}&page=1&include_adult=false`
let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${busqueda}&include_adult=false`
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let tituloBusqueda = document.querySelector(".srtext")


        if (data.results.length == 0) {
            tituloBusqueda.innerText = `No se a encontrado resultado de busqueda para: ${busqueda}`
        }
        else {
            tituloBusqueda.innerText = `Resultado de busqueda para: ${busqueda}`
        }
        let srsec = document.querySelector(".srec")
        let resultados = ""
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            resultados += `
            <article class= cartelera>
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt='imagen' />
             <p>Name:${element.title}</p>
             <p>Date: ${element.release_date} </p>
            </article>`
        }
        srsec.innerText = resultados
    })   
   .catch(function (error) {
        console.log(error);
    })

fetch(urlSeries)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        return data
    })

    .catch(function (error) {
        console.log(error);
    })


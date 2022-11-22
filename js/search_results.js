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
            tituloBusqueda.innerText = `No se ha encontrado resultado de busqueda para: ${busqueda}`
        }
        else {
            tituloBusqueda.innerText = `Resultado de busqueda para: ${busqueda}`
        }
        let srul = document.querySelector(".srul")
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            srul.innerHTML += `<article>
                <a href="detail-movie.html?id=${element.id}"><img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/></a>
                <p>${element.title}</p>
                <p>${element.release_date}</p>      
           </article>`  
        }
        
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
        let tituloBusqueda = document.querySelector(".srtext")


        if (data.results.length == 0) {
            tituloBusqueda.innerText = `No se a encontrado resultado de busqueda para: ${busqueda}`
        }
        else {
            tituloBusqueda.innerText = `Resultado de busqueda para: ${busqueda}`
        }
        let srul = document.querySelector(".srul")
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            srul.innerHTML += `
            <div class= 'movie'>
                <a href="detail-series.html?id=${element.id}"><img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/></a>
                <p>${element.name}</p>
                <p>${element.first_air_date}</p>      
                </div>
          `  
        }
    })

    .catch(function (error) {
        console.log(error);
    })


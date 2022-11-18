let apiKey = "925f4b20191d3e6290b49bd816600eda"
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("search");
let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${busqueda}&page=1&include_adult=false`
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
       console.log(data);
       return data
    })
   
    .catch(function (error) {
        console.log('Este es el error: ' + error);
    })

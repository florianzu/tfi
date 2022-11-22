
let qs = location.search;
let qsObject= new URLSearchParams(qs);
let genero= qsObject.get('id');

let qs2 = location.search;
let qsObject2= new URLSearchParams(qs2);
let genero2= qsObject2.get('id');

const apiKey = "925f4b20191d3e6290b49bd816600eda"
const genreurl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genero}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
const imageurl = 'https://image.tmdb.org/t/p/w500'
const main = document.querySelector('#main');

const tvUrl =` https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genero2}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`



getdatos(url); 
function getdatos(url) {
    fetch(url)
    .then(response =>response.json())
    .then(data =>  { 
        console.log(data.results);
          showPelis(data.results) ;
   })
}
function showPelis(data) {

    main.innerHTML = ""; 
    data.forEach((genre)=>{const {title, poster_path, id} = genre
const element = document.createElement("div")
element.innerHTML = `

<div class="elem"><a href="detail-movie.html?buscador=${id}"><img class= "imgs" src="${imageurl + poster_path}" alt=""></a> <h2 class = "titulospelis">${title}</h2> </div>` 
main.appendChild(element);
})
}

const mainn = document.querySelector("#mainn")

getdatos2(tvUrl); 
function getdatos2(serie) {
    fetch(serie)
    .then(response =>response.json())
    .then(data =>  { 
        console.log(data.results);
          showTV(data.results) ;
   })
}
function showTV(data) {
    mainn.innerHTML = ""; 
    data.forEach((tv)=>{const {name, poster_path, id} = tv
const element2 = document.createElement("div")
element2.innerHTML = `<div class="elem"><a href="detail-series.html?buscador=${id}"><img class= "imgs" src="${imageurl + poster_path}" alt=""></a> <h2 class = "titulospelis">${name}</h2> </div>` 
mainn.appendChild(element2)
})
}



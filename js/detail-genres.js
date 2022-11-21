const apiKey = "925f4b20191d3e6290b49bd816600eda"
const genreurl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=generos%20%3D%20&with_watch_monetization_types=flatrate`;
const imageurl = 'https://image.tmdb.org/t/p/w500'
const urltv = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
const main = document.querySelectorAll('#main')
const mainn = document.querySelector("#mainn")

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
    data.forEach((genre)=>{const {title, poster_path} = genre
const element = document.createElement("div")
element.innerHTML = `<div class="elem"><img class= "imgs" src="${imageurl + poster_path}" alt=""> <h2 class = "titulospelis">${title}</h2> </div>` 
main.appendChild(element)
})
}

getdatos2(urltv); 
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
    data.forEach((tv)=>{const {title, poster_path} = tv
const element2 = document.createElement("div")
element2.innerHTML =   `<div class="elem"><img class= "imgs" src="${imageurl + poster_path}" alt=""> 
                        <h2 class = "titulospelis">${title}</h2> </div>` 
mainn.appendChild(element2)
})
}
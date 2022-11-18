const apiKey = "925f4b20191d3e6290b49bd816600eda"
const genreurl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=generos%20%3D%20&with_watch_monetization_types=flatrate`;
const imageurl = 'https://image.tmdb.org/t/p/w500'
const main = document.querySelector("#main")

getdrama(url); 
function getdrama(url) {
    fetch(url)
    .then(response =>response.json())
    .then(data =>  { 
        console.log(data.results);
          showData(data.results) ;
   })
}
function showData(data) {

    main.innerHTML = ""; 
    data.forEach((genre)=>{const {title, poster_path} = genre
const element = document.createElement("div")
element.innerHTML = `<div class="elem"><img class= "imgs" src="${imageurl + poster_path}" alt=""> <h2 class = "titulospelis">${title}</h2> </div>` 
main.appendChild(element)
})
}


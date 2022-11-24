
   let recuperoStorage = localStorage.getItem("favoritos");
   let favoritos = JSON.parse(recuperoStorage)
   console.log(favoritos);

   

   let section = document.querySelector("#list");
   let peliculasFavoritas = ""

   

   if(favoritos == null || favoritos.length == 0 ) {
       favoritosTitular.innerText = "¡No hay favoritos seleccionados!"

   }
   else{
       
       for (let i=0; i<favoritos.length; i++){
           FavoritosPeliculas(favoritos[i])
       }
   }

   function FavoritosPeliculas(id){

  
   let url = `https://api.themoviedb.org/3/movie/${id}?api_key=925f4b20191d3e6290b49bd816600eda`
       
   fetch(url)
       .then(function(response) {
           return response.json();
       })
       .then(function(data) {
           console.log(data);
           peliculasFavoritas += 
           `
           <article class="articulosIndex">
           <div class="contenedorImagen">
               <a href="detail-movie.html?id=${data.id}">
                   <img src= "https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="">
               </a>
           </div>
           <h3>${data.title}</h3>
           <p>${data.release_date}</p>
       </article>`;
           
   
           section.innerHTML = peliculasFavoritas
       })
       .catch(function(error) {
           console.log("El error fue: " + error);
       });
   
   }

   let recuperoStorage2 = localStorage.getItem("favoritostv");
   let favoritosTv = JSON.parse(recuperoStorage)
   console.log(favoritosTv);

   

   let section2 = document.querySelector("#list2");
   let seriesFavoritas = ""

   

   if(favoritosTv == null || favoritosTv.length == 0 ) {
       favoritosTitular.innerText = "¡No hay favoritos seleccionados!"

   }
   else{
       
       for (let i=0; i<favoritosTv.length; i++){
           FavoritosTv(favoritosTv[i])
       }
   }

   function FavoritosTv(id){

  
   let urlSeries = `https://api.themoviedb.org/3/tv/${id}?api_key=925f4b20191d3e6290b49bd816600eda`
       
   fetch(urlSeries)
       .then(function(response) {
           return response.json();
       })
       .then(function(data) {
           console.log(data);
           seriesFavoritas += 
           `
           <article >
           <div>
               <a href="detail-series.html?id=${data.id}">
                   <img src= "https://image.tmdb.org/t/p/w500${data.poster_path}" alt="">
               </a>
           </div>
           <h3>${data.name}</h3>
           <p>${data.first_air_date}</p>
       </article>`;
           
   
           section2.innerHTML = seriesFavoritas
       })
       .catch(function(error) {
           console.log("El error fue: " + error);
       });
   
   }


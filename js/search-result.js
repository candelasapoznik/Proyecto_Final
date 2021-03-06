window.addEventListener('load', function () {
//HEADER
//buscador
let formulario = document.querySelector("form"); 
let campoBuscar = document.querySelector(".barra-buscador"); 
let alert = document.querySelector(".alertTotal"); 
formulario.addEventListener('submit', function(event){
event.preventDefault(); //Detenemos el comportamiento default del formulario que es enviarse.
    if (campoBuscar.value==''){ 
        alert.innerHTML= `<p class="alert">El campo está vacío, escribe al menos 3 caracteres para poder mostrarte resultados</p><i class="far fa-times-circle"></i>`;
    }else if (campoBuscar.value.length<3){
        alert.innerHTML= `<p class="alert">El campo tiene que tener al menos 3 caracteres para poder mostrarte resultados</p><i class="far fa-times-circle"></i>`;
    }else{
        this.submit();
        alert.style.display="none";
    }   

    //limpiar el mensaje de error cuando el usario modifique el contenido del campo input.
 campoBuscar.addEventListener('input', function(){
    alert.innerHTML ='';
    })
})
    let loader= document.querySelector('.loader')
    loader.style.display= 'none';
})
let queryString = new URLSearchParams(window.location.search)
let buscar= queryString.get('buscar');
let resultados= 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' +buscar
let artistas = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='+buscar
let informacion= document.querySelector(".tituloInfo");
let h2= document.querySelectorAll("h2");
let tablaCanciones= document.querySelector(".tablacanciones");
let tablacancionesDos= document.querySelector(".tablacanciones2");

fetch(artistas)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let listArtist= document.querySelector(".lista_artistas");
        let infoArtistas= data.data ;
        let contenido = '';
        
        if(infoArtistas.length> 0){

        informacion.innerText= 'Resultados de busqueda para:'+buscar ;
            }else{
        informacion.innerText= 'No encontramos resultados para: ' +buscar, 'lo siento';
        h2.style.display="none";
        tablaCanciones.style.display="none";
        tablaCancionesDos.style.display="none";
            }
        for( let i=0; i<infoArtistas.length;i++){
            contenido += `<article class="imagencontexto">
            <div class="card-image-artista">
                <img class="img_artista" src="${infoArtistas[i].picture_small}" alt="${infoArtistas[i].name}">
            </div>
            <div class="card-nombre-artista">
                <h3><a href="./detalle_artistas.html?id=${infoArtistas[i].id}">${infoArtistas[i].name}</a></h3>
            </div>	
        </article>`
        }
        listArtist.innerHTML += contenido;
        })
    .catch(function(error){
        console.log(error);
        })
let albumes = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q='+buscar
fetch(albumes)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let listAlbum= document.querySelector(".search_albumes");
        let infoAlbum= data.data ;
        let contenidoAlbum = ''
        for( let i=0; i<infoAlbum.length;i++){
            contenidoAlbum += `<article class="imagencontexto">
                <div class="card-imageAlbum">
                    <img class="img_album" src="${infoAlbum[i].cover_small}" alt="justin bieber">
                 </div>
                <div class="card-album">
                    <h3><a href="./detalle_disco.html?id=${infoAlbum[i].id}">${infoAlbum[i].title}</a></h3>
                    <p><a href="./detalle_artistas.html?id=${infoAlbum[i].artist.id}">${infoAlbum[i].artist.name}</a></p>
                </div>	
                </article>`
                }
        listAlbum.innerHTML += contenidoAlbum;
        })
    .catch(function(error){
        console.log(error);
        })

let Canciones = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+buscar
fetch(Canciones)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let songs= document.querySelector(".informacionResultados");
        let infoCanciones= data.data ;
        let contenidoCanciones = '';
        for( let i=0; i<infoCanciones.length;i++){
            contenidoCanciones +=	
            `<tr> 
                <td class="player><img src="${infoCanciones[i].artist.picture_small}"><a href="detalle_cancion.html?id=${infoCanciones[i].id}">${infoCanciones[i].title}</a></td>
                <td class="columna"></td>
                <td class="columna"><a href="detalle_artistas.html?id=${infoCanciones[i].id}">${infoCanciones[i].artist.name}</a></td>
            </tr>`
        }
        songs.innerHTML += contenidoCanciones;
        })
    .catch(function(error){
        console.log(error);
        })

        fetch(Canciones)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        let songs= document.querySelector(".informacionResultados2");
        let infoCanciones= data.data ;
        let contenidoCanciones = '';
        for( let i=0; i<infoCanciones.length;i++){
            contenidoCanciones +=	
            `<tr> 
                <td class="player><img src="${infoCanciones[i].artist.picture_small}"><a href="detalle_cancion.html?id=${infoCanciones[i].id}">${infoCanciones[i].title}</a></td>
                <td class="columna"></td>
                <td class="columna"><a href="detalle_artistas.html?id=${infoCanciones[i].id}">${infoCanciones[i].artist.name}</a></td>
                <td class="columna"><a href="detalle_disco.html?id=${infoCanciones[i].id}">${infoCanciones[i].album.title}</a></td>
                <td class="columna">${infoCanciones[i].duration}</td>
            </tr>`
        }
        songs.innerHTML += contenidoCanciones;
        })
    .catch(function(error){
        console.log(error);
        })
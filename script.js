const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=423f887574fa2d0e1c4e5a44da20b279&page=1";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?&api_key=423f887574fa2d0e1c4e5a44da20b279&query=keyword&page=1";
const FILE_PATH = 'https://image.tmdb.org/t/p/w500';

let listMovie = document.getElementById('movieList');
let inputSearch = document.getElementById('searchInput');

async function dataFetching (){
    let response = await fetch(API_URL);
    let movies = await response.json();
    
    tampilan(movies.results)
    console.log(movies);

}

dataFetching()

function removeAllChild(){
    while(listMovie.lastChild){
        listMovie.removeChild(movieList.lastChild)
    }
}

function tampilan(searchInput) {
    removeAllChild()
    let posterImage ='';
    searchInput.forEach(element => {

posterImage += `<div class="card row mt-5 p-10 justify-content-center" style="width: 16rem;">
  <img class="card-img-top col-md-1 fotoImage " src="${FILE_PATH + element.poster_path}"  alt="Card image cap">
  <a href="#" class="btn btn-primary mx-auto" width=20px>${element.vote_average}</a>
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text panajng">${element.overview}</p>
    
  </div>
</div> `

    });

    document.getElementById('movieList').innerHTML=posterImage;
};

console.log(listMovie);

async function searchFetching (keyword){
    let response = await fetch(API_SEARCH.replace('keyword', keyword));
    let movies = await response.json();
    tampilan(movies.results);
    console.log(movies.results);
};

inputSearch.addEventListener("change", (eventOutput)=>{
    searchFetching(eventOutput.target.value);
});























// let templateCard = '';


// dataFetching(API_URL)
// async function dataFetching(url){
//     let response = await fetch(url);
//     let movies = await response.json();
//     // console.log(movies);
//     listFetching(data.results);
// }

// dataFetching()

// async function listFetching (data){
//     listMovie.innerHTML = '';

//     data.forEach(movie=> {
//         let{title, poster_path, vote_average} = movie
//         // templateCard += 

//         document.getElementById('movieList').innerHTML=templateCard;
//         const movieListDOM = document.createElement('div')
//         movieListDOM.classList.add('col')
//         movieListDOM.innerHTML = 

//         listMovie.appendChild(movieListDOM);
//     });


// }

// async function searchFetching (keyword){
//     let response = await fetch(API_SEARCH.replace('keyword', keyword));
//     let movies = await response.json();
//     tampilan(movies.results);
//     console.log(movies.results);
// };



// inputSearch.addEventListener("change", (eventOutput)=>{
//     console.log(eventOutput.target.value);
//     searchFetching(eventOutput.target.value);
// });

// `

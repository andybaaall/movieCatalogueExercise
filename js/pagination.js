// number of pagination pages
// -----------------------------------------------------------------------------

var maxNumberOnScreen = 8;
var numberOfPages = Math.ceil(movies.length / maxNumberOnScreen);

// console.log(numberOfPages);

if(numberOfPages > 1){
    var pagination = document.getElementById('paginationMovies');
    for (var i = 0; i < numberOfPages; i++) {
        pagination.innerHTML += "<li class='page-item'><a class='page-link' href='#' data-x:'" + i + "' onclick='getContents();'>"+(i+1)+"</a></li>";

        // for (var i = 1; i < numberOfPages; i++) {
        //     pagination.innerHTML += "<li class='page-item'><a class='page-link' href='#' data-x:'" + i + "' onclick='getContents();'>"+(i+1)+"</a></li>";

    }
}

// rendering the cards in increments of 8 according to which 'panel' we're on
// -----------------------------------------------------------------------------

// for onload:

if (maxNumberOnScreen > movies.length){
  console.log("fewer than 8 movies -- can't fill the screen")
  showMovieThumbnails(0, movies.length);
} else {
  console.log("more than 8 movies -- gotta render pagination")
  showMovieThumbnails(0 , maxNumberOnScreen);
}


function showMovieThumbnails(start, end){      // start and end are subbing in here for (x) and (x + 7)
  console.log(start);
  console.log(end);
  // instead of counting up from X, we're just going to be calling those vars 'start' and 'end'

  // now we're going to render the contents:
  for (var i = start; i < end; i++) {

    var movie = movies[i];

    var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
            movieCard += '<div class="movieThumb movieThumb2 card h-100" data-id="'+movie.id+'">';
                movieCard += '<img src="images/posters/'+movie.poster+'" class="card-img-top" alt="">';
                movieCard += '<div class="card-body">';
                    movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
                movieCard += '</div>';
            movieCard += '</div>';
        movieCard += '</div>';

    document.getElementById('moviesList').innerHTML += movieCard;
  }
}

// function showMovieThumbnails(start, end){
//    console.log(start);
//    console.log(end);
//    for (var i = start; i < end; i++) {
//        var movie = movies[i];
//
//        var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
//            movieCard += '<div class="movieThumb movieThumb2 card h-100" data-id="'+movie.id+'">';
//                movieCard += '<img src="images/posters/'+movie.poster+'" class="card-img-top" alt="">';
//                movieCard += '<div class="card-body">';
//                    movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
//                movieCard += '</div>';
//            movieCard += '</div>';
//        movieCard += '</div>';
//
//        document.getElementById('moviesList').innerHTML += movieCard;
//    }
// }



// so this version is rendering all 12 (movies.length), and then 8 (maxNumberOnScreen)

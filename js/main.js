var movies = [
  {
    id: 1,
    title: "Aguirre",
    year: 1972,
    directors: ["Werner Herzog"], // this is an array bc we might want to have films later with multiple directors
    bio: "In the 16th century, the ruthless and insane Don Lope de Aguirre leads a Spanish expedition in search of El Dorado.",
    length: 95,
    poster: "aguirre.jpg",
    genre: ["Historical" , "Psychological" , "True Story"]
  },
  {
    id: 2,
    title: "The Great Ecstacy of Woodcarver Steiner",
    year: 1974,
    directors: ["Werner Herzog"],
    bio: "A study of the psychology of a champion ski-jumper, whose full-time occupation is carpentry.",
    length: 45,
    poster: "theGreatEcstasy.jpg",
    genre: ["Documentary" , "Sports" , "Woodwork"]
  },
  {
    id: 3,
    title: "The Enigma of Kaspar Hauser",
    year: 1974,
    directors: ["Werner Herzog"],
    bio: "Herzog's film is based upon the true and mysterious story of Kaspar Hauser, a young man who suddenly appeared in Nuremberg in 1828, barely able to talk or walk, and bearing a strange note.",
    length: 105,
    poster: "kasparHauser.jpg",
    genre: ["Documentary" , "Historical"]
  },
  {
    id: 4,
    title: "How Much Wood Would a Woodchuck Chuck...",
    year: 1976,
    directors: ["Werner Herzog"],
    bio: "Herzog examines the world championships for cattle auctioneers, his fascination with a language created by an economic system, and compares it to the lifestyle of the Amish, who live nearby.",
    length: 44,
    poster: "4Shorts.jpg",
    genre: ["Documentary" , "Language" , "Cattle"]
  },
  {
    id: 5,
    title: "Heart of Glass ",
    year: 1976,
    directors: ["Werner Herzog"],
    bio: "The foreman of a small village glassworks dies without revealing the secret to the famous \"Ruby Glass\".",
    length: 94,
    poster: "heartOfGlass.jpg",
    genre: ["Documentary" , "Glassworks" , "Aching Nostalgia"]
  }
];

// console.log(movies);
var moviesList = document.getElementById("moviesList");

for (var i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
  var movie = movies[i];
  // console.log(movie.title);
  // document.getElementById("moviesList").innerHTML += "<p>" + movie.title + "</p>"
  // (bootstrap wants <p> tags to display as flex, so it gets pretty weird)

//here's one way we can do this: -----------------------------------------------
//------------------------------------------------------------------------------
  // moviesList.innerHTML += "<div class='col-12 col-sm-6 col-md-4'>";
  //   // this won't work if you don't use +=
  //   moviesList.innerHTML += "<div class='card'>";
  //   // wait just one minute! JS now closes open HTML tags that you create using the innerHTML property, so we can't nest like this
  //   // at least not on the latest version of Chrome
  //   moviesList.innerHTML += "</div>";
  // moviesList.innerHTML += "</div>";

//here's another way we can do this (still using innerHTML, but this time in a variable):
//------------------------------------------------------------------------------
    var genreClass = "";

    if(movie.genre[0] === "Historical"){
    genreClass = "border-primary";
    // and we could store more variables here, like 'var genreContents = "this is a heist movie"'
    } else if (movie.genre[0] === "Docmentary") {
      genreClass = "border-secondary";
      // maybe something like 'var genreContents = "this is a seige movie"'
      // or even other styles, like 'background-color: $actionMovie;'
    }

    // on else and else if: if you've got more than two conditions -- or in this case, potential conditions -- you need to be using
    // 'else if' to specify another possible outcome. When you're done listing potential conditions, you need to be using
    // 'else' to cover any conditions not covered by your initial 'if' and subsequent 'else if's

    var movieCard = "<div class='col-12 col-sm-6 col-md-3' m-b-3 text-center>";
          // onclick lives here:
          // movieCard += "<div class = 'card movieThumb " + genreClass + " ' onclick='showMoreMovie();'>";
          movieCard += "<div class = 'card movieThumb movieThumb2" + genreClass + " '>";
            movieCard += "  <img src='images/posters/" + movie.poster + "' class='card-img-top' alt=''>"
            movieCard += "<div class = 'card-body'>";
              movieCard += "<h5 class = 'card-title'>" + movie.title + "</h5>";
            movieCard += "</div>";
          movieCard += "</div>";
        movieCard += "</div>";

    moviesList.innerHTML += movieCard;
    // console.log(movieCard); // this basically generates a giant string

//and here's yet another way we can do this: -----------------------------------
//------------------------------------------------------------------------------
  // var columns = document.createElement("div");
  // var columnsAttr = document.createAttribute("class");
  // columnsAttr.value = "col-12 col-sm-6 col-md-4";
  // columns.setAttributeNode(columnsAttr);
  //
  // var card = document.createElement("card");
  // var cardAttr = document.createAttribute("class");
  // cardAttr.value = "card";
  // card.setAttributeNode(cardAttr);
  //
  // var cardBody = document.createElement("div");
  // var cardBodyAttr = document.createAttribute("class");
  // cardBodyAttr.value = "card-body";
  // cardBody.setAttributeNode(cardBodyAttr);
  //
  // var cardTitle = document.createElement("h5");
  // var cardTitleAttr = document.createAttribute("class");
  // cardTitleAttr.value = "card-title";
  // cardTitle.setAttributeNode(cardTitleAttr);
  //
  // var cardTitleText = document.createTextNode(movie.title);
  // cardTitle.appendChild(cardTitleText);
  //
  // cardTitle.appendChild(cardTitleText);
  // cardBody.appendChild(cardTitle);
  // card.appendChild(cardBody);
  // columns.appendChild(card);
  // moviesList.appendChild(columns);

  // so we're creating elements with createElement, giving them attributes with createAttribute and setAttributeNode, and then nesting them inside existing elements using appendChild.
}

function showMoreMovie(){
  // console.log('got a click');
  document.getElementById("overlay").style.display = "flex";
  document.body.style.overflow = "hidden";
}

var movieThumbnails = document.getElementsByClassName("movieThumb2");
// console.log(movieThumbnails);
for (var i = 0; i < movieThumbnails.length; i++) {
  // console.log(movieThumbnails[i]);
  // movieThumbnails[i].onclick = showMoreMovie;
    // we omit the brackets because we're calling a function that's bound to an event handler. Who can say why.
  movieThumbnails[i].onclick = function(){
    showMoreMovie();
  }
}

document.getElementById("close").onclick = function(){
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "scroll";
}

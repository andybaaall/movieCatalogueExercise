var movies = [
  {
    id: 1,
    title: "Aguirre",
    year: 1972,
    directors: ["Werner Herzog"],
    bio: "Aguirre, the Wrath of God (German: Aguirre, der Zorn Gottes), known in the UK as Aguirre, Wrath of God, is a 1972 West German epic historical drama film written and directed by Werner Herzog. Klaus Kinski stars in the title role. The soundtrack was composed and performed by West German progressive/Krautrock band Popol Vuh. The story follows the travels of Spanish soldier Lope de Aguirre, who leads a group of conquistadores down the Amazon River in South America in search of the legendary city of gold, El Dorado.",
    movieLength: 95,
    poster: "aguirre.jpg",
    genre: ["Historical" , "Psychological" , "True Story"]
  },
  {
    id: 2,
    title: "The Great Ecstacy of Woodcarver Steiner",
    year: 1974,
    directors: ["Werner Herzog"],
    bio: "The Great Ecstasy of Woodcarver Steiner (German: Die große Ekstase des Bildschnitzers Steiner) is a 1974 documentary film by German filmmaker Werner Herzog. It is about Walter Steiner, a celebrated ski jumper of his era who worked as a carpenter for his full-time occupation. Showcased is Steiner's quest for a world record in ski flying, as well as the dangers involved in the sport. Herzog has called it 'one of my most important films'.",
    movieLength: 45,
    poster: "theGreatEcstasy.jpg",
    genre: ["Documentary" , "Sports" , "Woodwork"]
  },
  {
    id: 3,
    title: "The Enigma of Kaspar Hauser",
    year: 1974,
    directors: ["Werner Herzog" , "Werner 2" , "Werner 3"],
    bio: "The Enigma of Kaspar Hauser (German: Jeder für sich und Gott gegen alle; lit. Every Man for Himself and God Against All) is a 1974 West German drama film written and directed by Werner Herzog and starring Bruno Schleinstein (credited as Bruno S.) and Walter Ladengast. The film closely follows the real story of foundling Kaspar Hauser, using the text of actual letters found with Hauser.",
    movieLength: 105,
    poster: "kasparHauser.jpg",
    genre: ["Documentary" , "Historical"]
  },
  {
    id: 4,
    title: "How Much Wood Would a Woodchuck Chuck...",
    year: 1976,
    directors: ["Werner Herzog"],
    bio: "How Much Wood Would a Woodchuck Chuck (German: Beobachtungen zu einer neuen Sprache, literally 'Observations of a New Language') is a 1976 documentary film by German director Werner Herzog, produced by Werner Herzog Filmproduktion. It is a 44-minute film documenting the World Livestock Auctioneer Championship held in New Holland, Pennsylvania. The film also contains a section about the Amish and shows Amish speaking Pennsylvania German.",
    movieLength: 44,
    poster: "4Shorts.jpg",
    genre: ["Documentary" , "Language" , "Cattle"]
  },
  {
    id: 5,
    title: "Heart of Glass",
    year: 1976,
    directors: ["Werner Herzog"],
    bio: "Heart of Glass (German: Herz aus Glas) is a 1976 German film directed and produced by Werner Herzog, set in 18th century Bavaria. The film was written by Herzog, based partly on a story by Herbert Achternbusch. The main character is Hias, based on the legendary Bavarian prophet Mühlhiasl.",
    movieLength: 94,
    poster: "heartOfGlass.jpg",
    genre: ["Documentary" , "German Idealism" , "Aching Nostalgia"]
  },
  {
    id: 6,
    title: "Meeting Gorbachev",
    year: 2018,
    directors: ["Werner Herzog" , "André Singer"],
    bio: "Meeting Gorbachev is a 2018 biographical documentary film directed by Werner Herzog and André Singer about the life of Mikhail Gorbachev, the eighth and last leader of the Soviet Union. The film features three interviews between Herzog and Gorbachev, conducted over the span of six months, and had its world premiere at the Telluride Film Festival on September 1, 2018.",
    movieLength: 90,
    poster: "meetingGorbachev.jpg",
    genre: ["Documentary" , "Psychological" , "Aching Nostalgia"]
  },
  {
    id: 7,
    title: "My Son, My Son, What Have Ye Done",
    year: 2009,
    directors: ["Werner Herzog"],
    bio: "My Son, My Son, What Have Ye Done? is a 2009 American-German film directed by Werner Herzog and produced by David Lynch, inspired by the story of murderer Mark Yavorsky.[2][5] Herzog describes the film as 'a horror film without the blood, chainsaws and gore, but with a strange, anonymous fear creeping up in you.' The film is an international co-production between the United States and Germany.",
    movieLength: 91,
    poster: "mySonMySon.jpg",
    genre: ["True Story" , "Psychological" , "Tragedy"]
  },
  {
    id: 8,
    title: "Woyzeck",
    year: 1979,
    directors: ["Werner Herzog"],
    bio: "Woyzeck is a 1979 German drama film written, produced and directed by Werner Herzog and starring Klaus Kinski and Eva Mattes. It is an adaptation of the unfinished play Woyzeck by German dramatist Georg Büchner.",
    movieLength: 82,
    poster: "woyzeck.jpeg",
    genre: ["Historical" , "Tragedy" , "Adaptation"]
  },
  {
    id: 9,
    title: "Invincible",
    year: 1979,
    directors: ["Werner Herzog"],
    bio: "2001 drama film written and directed by Werner Herzog. The film stars Tim Roth, Jouko Ahola, Anna Gourari, and Max Raabe. The film tells the story of a Jewish strongman in Germany. While basing his story on the real-life figure Zishe Breitbart (a.k.a. Siegmund Breitbart), Herzog uses the bare facts of Breitbart's life to weave fact and fiction (e.g., the story is set in 1932 Berlin, a full seven years after Breitbart's death in 1925) to create an allegory of human strength, knowing oneself with honesty and pride in one's heritage.",
    movieLength: 134,
    poster: "invincible.jpg",
    genre: ["True Story" , "Historical"]
  },
  {
    id: 10,
    title: "Grizzly Man",
    year: 2005,
    directors: ["Werner Herzog"],
    bio: "A devastating and heart-rending take on grizzly bear activists Timothy Treadwell and Amie Huguenard, who were killed in October of 2003 while living among grizzly bears in Alaska.",
    movieLength: 104,
    poster: "grizzlyMan.jpg",
    genre: ["Documentary" , "Bears"]
  },
  {
    id: 11,
    title: "Cave of Forgotten Dreams",
    year: 2005,
    directors: ["Werner Herzog"],
    bio: "In 1994, a group of scientists discovered a cave in Southern France perfectly preserved for over 20,000 years and containing the earliest known human paintings. Knowing the cultural significance that the Chauvet Cave holds, the French government immediately cut-off all access to it, save a few archaeologists and paleontologists. But documentary filmmaker, Werner Herzog, has been given limited access, and now we get to go inside examining beautiful artwork created by our ancient ancestors around 32,000 years ago.",
    movieLength: 95,
    poster: "caveOfForgottenDreams.jpg",
    genre: ["Documentary" , "Bears"]
  },
  {
    id: 12,
    title: "Beyond the Thunderdome",
    year: 1985,
    directors: ["George Miller" , "George Ogilvie"],
    bio: "Epoch-marking, genre-defining, this is definitely the best thing that has ever come out of that Godforsaken land down Under. After being exiled from the most advanced town in post apocalyptic Australia, a drifter travels with a group of abandoned children to rebel against the town's queen.",
    movieLength: 104,
    poster: "beyondThunderdome.jpg",
    genre: ["Guzzoline" , "Heavy Metal" , "Tina Turner" , "Ford XB GT Coupé 'V8 Interceptor'"]
  }
];

// -----------------------------------------------------------------------------------------------------------------------------------
// RENDERING THE MOVIE CARDS' CONTENT
// -----------------------------------------------------------------------------------------------------------------------------------


// console.log(movies);
var moviesList = document.getElementById("moviesList");

for (var i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
  var movie = movies[i];
  // console.log(movie.title);
  // document.getElementById("moviesList").innerHTML += "<p>" + movie.title + "</p>"
  // (bootstrap wants <p> tags to display as flex, so it gets pretty weird)

//here's one way we can do this: -----------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------
  // moviesList.innerHTML += "<div class='col-12 col-sm-6 col-md-4'>";
  //   // this won't work if you don't use +=
  //   moviesList.innerHTML += "<div class='card'>";
  //   // wait just one minute! JS now closes open HTML tags that you create using the innerHTML property, so we can't nest like this
  //   // at least not on the latest version of Chrome
  //   moviesList.innerHTML += "</div>";
  // moviesList.innerHTML += "</div>";

//here's another way we can do this (still using innerHTML, but this time in a variable):
//------------------------------------------------------------------------------------------------------------------------------------
    // var genreClass = "";
    //
    // if(movie.genre[0] === "Historical"){
    // genreClass = "border-primary";
    // // and we could store more variables here, like 'var genreContents = "this is a heist movie"'
    // } else if (movie.genre[0] === "Documentary") {
    //   genreClass = "border-success";
    //   // maybe something like 'var genreContents = "this is a seige movie"'
    //   // or even other styles, like 'background-color: $actionMovie;'
    // }

    var genreColor = getGenreColor(movie.genre[0]); // [0] because we want the 'primary' genre

    var movieCard = "<div class='col-12 col-sm-6 col-md-3 m-b-3 mb-3'>";
          // onclick lives here:
          movieCard += "<div class = 'card movieThumb h-100 text-center border-" + genreColor + " ' onclick='showMoreMovie(" + movie.id + ");'>";
          // movieCard += "<div class = 'card movieThumb movieThumb2 " + genreClass + " ' data-id='" + movie.id + "' >";
            movieCard += "  <img src='images/posters/" + movie.poster + "' class='card-img-top cardImgHeight' alt=''>"
            movieCard += "<div class = 'card-body'>";
              movieCard += "<h5 class = 'card-title'>" + movie.title + "</h5>";
            movieCard += "</div>";
          movieCard += "</div>";
        movieCard += "</div>";

    moviesList.innerHTML += movieCard;
    // console.log(movieCard); // this basically generates a giant string

//and here's yet another way we can do this: -----------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------------------------------------------------------------
// opening the overlay, and rendering its content
// -----------------------------------------------------------------------------------------------------------------------------------

function showMoreMovie(movieNumber){
  var singleMovie;
  // console.log(movieNumber);

  for (var i = 0; i < movies.length; i++) {

    if(movies[i].id === movieNumber){
      // console.log(movies[i]);
      singleMovie = movies[i];
      break;
      // wheras return gets us out of a function, break stops a loop. Nothing will run after you tell a loop to break
      // ... good thing we redefined singleMovie before we broke our loop!
    }
  }
  // console.log(singleMovie);
  // console.log(singleMovie.title);

  // poster
  document.getElementById("posterImage").src = "images/posters/" + singleMovie.poster;
  // bio
  document.getElementById("movieTitle").innerText = singleMovie.title;
  // year
  document.getElementById("movieYear").innerText = singleMovie.year;
  // director(s)
  document.getElementById("movieDirectors").innerHTML = "";

  for (var i = 0; i < singleMovie.directors.length; i++) {
    document.getElementById("movieDirectors").innerHTML += "<li class = 'list-inline-item'>" + singleMovie.directors[i] + "</li>";
  }
    // bio
  document.getElementById("movieBio").innerText = singleMovie.bio;
  // length
  document.getElementById("movieLength").innerText = singleMovie.movieLength;
  // genre(s)
  document.getElementById("movieGenre").innerHTML = "";


  for (var i = 0; i < singleMovie.genre.length; i++) {
    var genreColor = getGenreColor(singleMovie.genre[i]);

  //   if (singleMovie.genre[i] == "Historical") {
  //     genreColor = "badge-primary";
  //   } else if (singleMovie.genre[i] == "Documentary"){
  //     genreColor = "badge-success";
  //   } else if (singleMovie.genre[i] == "Psychological"){
  //     genreColor = "badge-secondary";
  //   } else if (singleMovie.genre[i] == "Sports"){
  //     genreColor = "badge-warning";
  //   } else if (singleMovie.genre[i] == "Language"){
  //     genreColor = "badge-danger";
  //   } else if (singleMovie.genre[i] == "Cattle"){
  //     genreColor = "badge-info";
  //   } else if (singleMovie.genre[i] == "German Idealism"){
  //     genreColor = "badge-light";
  //   } else {
  //     genreColor = "badge-dark";
    // }

    document.getElementById("movieGenre").innerHTML += "<span class = 'badge badge-pill badge-" + genreColor + " mx-1'>" + singleMovie.genre[i] + "</span>";
  }

  // load the contents first, then render it, so it all displays at the same time!
  document.getElementById("overlay").style.display = "flex";
  document.body.style.overflow = "hidden";
}


// movieThumb2 method (applies onClick) ----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------


var movieThumbnails = document.getElementsByClassName("movieThumb2");

for (var i = 0; i < movieThumbnails.length; i++) {
  // console.log(movieThumbnails[i]);
  // console.log(movieThumbnails[i].dataset);    // the HTML dataset object is freakin' cool
  // console.log(movieThumbnails[i].dataset.id);

  // var id = parseInt(movieThumbnails[i].dataset.id);
  // console.log(id);

  // movieThumbnails[i].onclick = showMoreMovie;
    // we omit the brackets because we're calling a function that's bound to an event handler. Who can say why.

  movieThumbnails[i].onclick = function(){
    var id = parseInt(this.dataset.id);
    showMoreMovie(id);
    console.log(id);
  }
}

// close button for the overlay   ----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------


document.getElementById("close").onclick = function(){
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "scroll";
}

// genre color function --------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

// movies.genre = "Historical";
// // substituting in today for movies.genre[i], because we're not in a loop rn
//
// function getGenreColor(){
//   var genreColor;
//   if (movies.genre == "Historical") {
//     genreColor = "primary";
//   } else if (movies.genre == "Documentary"){
//     genreColor = "badge-success";
//   } else if (movies.genre == "Psychological"){
//     genreColor = "badge-secondary";
//   } else if (movies.genre == "Sports"){
//     genreColor = "badge-warning";
//   } else if (movies.genre == "Language"){
//     genreColor = "badge-danger";
//   } else if (movies.genre == "Cattle"){
//     genreColor = "badge-info";
//   } else if (movies.genre == "German Idealism"){
//     genreColor = "badge-light";
//   } else {
//     genreColor = "badge-dark";
//   }
//   return genreColor;
// }
// console.log('oh sweaty u were so close! so smart to get so close!')


function getGenreColor(genre){
  if (genre == "Historical") {
      return "primary";
    } else if (genre == "Documentary"){
      return "secondary";
    } else if (genre == "Psychological"){
      return "success";
    } else if (genre == "Sports"){
      return "warning";
    } else if (genre == "Language"){
      return "danger";
    } else if (genre == "Cattle"){
      return "info";
    } else if (genre == "German Idealism"){
      return "light";
    } else {
      return "dark";
    }
  }

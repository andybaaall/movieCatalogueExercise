var movies = [
  {
    id: 1,
    title: "Aguirre",
    year: 1972,
    directors: ["Werner Herzog"], // this is an array bc we might want to have films later with multiple directors
    bio: "In the 16th century, the ruthless and insane Don Lope de Aguirre leads a Spanish expedition in search of El Dorado.",
    length: 95,
    poster: "aguirre.jpg"
  },
  {
    id: 2,
    title: "The Great Ecstasy of Woodcarver Steiner",
    year: 1974,
    directors: ["Werner Herzog"],
    bio: "A study of the psychology of a champion ski-jumper, whose full-time occupation is carpentry.",
    length: 45,
    poster: "theGreatEcstasy.jpg"
  },
  {
    id: 3,
    title: "The Enigma of Kaspar Hauser",
    year: 1974,
    directors: ["Werner Herzog"],
    bio: "Herzog's film is based upon the true and mysterious story of Kaspar Hauser, a young man who suddenly appeared in Nuremberg in 1828, barely able to talk or walk, and bearing a strange note.",
    length: 105,
    poster: "kasparHauser.jpg"
  },
  {
    id: 4,
    title: "How Much Wood Would a Woodchuck Chuck...",
    year: 1976,
    directors: ["Werner Herzog"],
    bio: "Herzog examines the world championships for cattle auctioneers, his fascination with a language created by an economic system, and compares it to the lifestyle of the Amish, who live nearby.",
    length: 44,
    poster: "4Shorts.jpg"
  },
  {
    id: 5,
    title: "Heart of Glass ",
    year: 1976,
    directors: ["Werner Herzog"],
    bio: "The foreman of a small village glassworks dies without revealing the secret to the famous \"Ruby Glass\".",
    length: 94,
    poster: "heartOfGlass.jpg"
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

//here's another way we can do this: -------------------------------------------
//------------------------------------------------------------------------------
  // var movieCard = "<div class='col-12 col-sm-6 col-md-4'>";
  //       movieCard += "<div class='card'>";
  //         movieCard += "<div class='card-body'>";
  //           movieCard += "<h5 class='card-title'>" + movie.title + "</h5>";
  //         movieCard += "</div>";
  //       movieCard += "</div>";
  //     movieCard += "</div>";
  // // console.log(movieCard);
  //
  // moviesList.innerHTML += movieCard;

//and here's yet another way we can do this: -----------------------------------
//------------------------------------------------------------------------------
  var columns = document.createElement("div");
  var columnsAttr = document.createAttribute("class");
  columnsAttr.value = "col-12 col-sm-6 col-md-4";
  columns.setAttributeNode(columnsAttr);
  // or, in human language, 'columns.set this attribute to this element, i.e. "columns" '

  var card = document.createElement("card");
  var cardAttr = document.createAttribute("class");
  cardAttr.value = "card";
  card.setAttributeNode(cardAttr);

  var cardBody = document.createElement("div");
  var cardBodyAttr = document.createAttribute("class");
  cardBodyAttr.value = "card-body";
  card.setAttributeNode(cardBodyAttr);

  var cardTitle = document.createElement("div");
  var cardTitleAttr = document.createAttribute("class");
  cardTitleAttr.value = "card-title";
  card.setAttributeNode(cardTitleAttr);
  var cardTitleText = document.createTextNode(movie.title);
  cardTitle.appendChild(cardTitleText);

  cardTitle.appendChild(cardTitleText);
  cardBody.appendChild(cardTitle);
  card.appendChild(cardBody);
  columns.appendChild(card);
  moviesList.appendChild(columns);
}

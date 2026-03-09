/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"

*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//" sci-fi" movie
let film=movies.filter(Element=>Element.genre=="Sci-Fi")
console.log(film);


//modifing title
let modifing=movies.map(Element=>{
    if(Element.title=="Inception"){
        return Element.title="Inception (8.8)"
    }
})
console.log(modifing);

//to find average movie rating

let totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
let averageRating = totalRating / movies.length;
console.log("Average Rating:", averageRating);


//  find() movie "Joker"
let jokerMovie = movies.find(movie => movie.title === "Joker");
console.log("Found Movie:", jokerMovie);


// findIndex() of "Avengers"
let avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of Avengers:", avengersIndex);


const express = require("express");

const app = express();

const port = 5000;
const welcome=(req, res) => {
    res.send("welcome to my favourite movies")
}
app.get("/", welcome)

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const getMovies = (req, res) => {
    res.status(200).json(movies)
}


app.get ("/api/movies", getMovies);


for (let i=0; i<movies.length; i++){
   const  movie=movies[i]
   const getMoviesById =(req, res) => {
    const movieId=parseInt(req.params.id)
    if ( movieId === movie.id){
        
            res.status(200).json(movie)
        }
    
   

else {
    
        res.status(404).send("not found");
      };
}
app.get("/api/movies/:id", getMoviesById)
}
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
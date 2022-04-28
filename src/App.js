import React,{useState} from "react";
import Movie from './Components/Movie';
import MovieList from "./Components/MovieList";

function App() {

  const [movies,setMovies] = useState([]);

  const fetchMovieHandler = () => {       
    fetch("https://swapi.dev/api/films/").then((data)=>{
        //console.log(data.json());
        return data.json();        
    }).then((data1) => {
        console.log(data1);
        setMovies(data1);
    })
  }

  return (
    <div>
      <Movie  onClick={fetchMovieHandler} />
      <MovieList movies={movies} />

    </div>
  );
}

export default App;

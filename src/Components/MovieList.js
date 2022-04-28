import React from "react";
import MovieItem from "./MovieItem";
const MovieList = (props) => {
   // console.log(props.movies);
   // console.log(props.movies.count)
    return(
        <ul>
            {(props.movies.count > 0) ?  props.movies.results.map((movie) =>{
                    
                    return(
                      <MovieItem key={movie.title} title={movie.title} desc= {movie.opening_crawl} releaseDate = {movie.release_date} />
                    )
                      
            })
            : <p>No Movies Fetched</p>
        } 
        </ul>
    );
}

export default MovieList
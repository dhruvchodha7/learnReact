import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchMoviesHandler = useCallback(async()=>{
    try {
      setIsLoading(true);
      const res = await fetch("https://swapi.py4e.com/api/films");
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Something Went wrong");
      }
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
  }, []); 
  useEffect(() => {
    fetchMoviesHandler()
  }, []);
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={dummyMovies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found No Movies</p>}
        {isLoading && <p>Loading</p>}
        {!isLoading && error&& <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}
export default App;

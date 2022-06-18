
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';

// Types

import { IMovie } from "../../models/movie.types";

// Context
import { ProvideContext } from "../../store/Store";
const MovieDetails = () => {
  const { movies } = useContext(ProvideContext);
  const [movie, setMovie] = useState<IMovie | undefined>({} as IMovie);
  const params = useParams();

  useEffect(() => {
    const findedMovie = movies.find(mov => mov.imdbID === params.id); // one movie should get api/id url. **
    setMovie(findedMovie);
  }, [])


  return (
    <div>
      {movie && movie.Title}
      {movie && movie.Type}
      {movie && movie.Year}
      <img src={movie && movie.Poster} />
    </div>
  )
}

export default MovieDetails;

import { useContext, useEffect, useState } from 'react';

//Material UI
import { Paper, LinearProgress, Box } from '@mui/material';

// Folders
import MovieTable from '../../layout/Movies/MovieTable';
import MovieFilter from './../../layout/Movies/MovieFilter';
// Context
import { ProvideContext } from "../../store/Store";

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>("Pokemon");
  const [movieType, setMovieType] = useState<string>("");

  const { getMovies, loading, movies } = useContext(ProvideContext);

  useEffect(() => {
    getMovies(selectedMovie);
  }, [selectedMovie]); // eslint-disable-line react-hooks/exhaustive-deps

  const typeFilter = movieType === "" ? movies : movies.filter(mov => mov.Type === movieType);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {loading &&
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      }
      <MovieFilter
        setSelectedMovie={setSelectedMovie}
        setMovieType={setMovieType}
        movieType={movieType}
      />
      <MovieTable movies={typeFilter} />
    </Paper>
  )
}

export default Movies
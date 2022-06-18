
import { useContext, useEffect, useState } from 'react';

//Material UI
import { Paper } from '@mui/material';

// Folders
import MovieTable from '../../layout/Movies/MovieTable';
import MovieFilter from './../../layout/Movies/MovieFilter';
// Context
import { ProvideContext } from "../../store/Store";

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>("Pokemon");
  const { getMovies } = useContext(ProvideContext);
  // const movieUrls = ["Pokemon", "lord+of+the+rings", "batman", "spiderman", "Star+Wars"];

  useEffect(() => {
    getMovies(selectedMovie);
  }, [selectedMovie]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <MovieFilter />
      <MovieTable />
    </Paper>
  )
}

export default Movies
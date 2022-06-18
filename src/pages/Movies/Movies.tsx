
import { useContext, useEffect, useState } from 'react';

//Material UI
import { Paper, LinearProgress  ,Box } from '@mui/material';

// Folders
import MovieTable from '../../layout/Movies/MovieTable';
import MovieFilter from './../../layout/Movies/MovieFilter';
// Context
import { ProvideContext } from "../../store/Store";

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>("Pokemon");
  const { getMovies, loading } = useContext(ProvideContext);

  useEffect(() => {
    getMovies(selectedMovie);
  }, [selectedMovie]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {loading &&
        <Box sx={{ width: '100%' }}>
          <LinearProgress   />
        </Box>
      }
      <MovieFilter setSelectedMovie={setSelectedMovie} />
      <MovieTable />
    </Paper>
  )
}

export default Movies
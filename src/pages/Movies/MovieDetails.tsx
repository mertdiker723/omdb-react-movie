
import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
// Material UI
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// Types
import { IMovie } from "../../models/movie.types";

// Context
import { ProvideContext } from "../../store/Store";
const MovieDetails = () => {
  const { movies } = useContext(ProvideContext);
  let navigate = useNavigate();
  const [movie, setMovie] = useState<IMovie | undefined>({} as IMovie);
  const params = useParams();

  useEffect(() => {
    const findedMovie = movies.find(mov => mov.imdbID === params.id); // one movie should get api/id url. **
    setMovie(findedMovie);
  }, [])

  const backMovies = () => {
    navigate(`/`, { replace: true });
  }

  return (
    <>
      <Grid container >
        <Grid item xs={12}>
          <Button variant="contained" onClick={backMovies} startIcon={<KeyboardBackspaceIcon />}>
            Back
          </Button>
        </Grid>
      </Grid>
      <Card sx={{ maxWidth: 345,mt:2 }}>
        <CardMedia
          component="img"
          height="100%"
          width={"100%"}
          image={movie?.Poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie?.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            IMDB ID: {movie?.imdbID}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year: {movie?.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {movie?.Type}
          </Typography>
        </CardContent>
      </Card>

    </>
  )
}

export default MovieDetails;
import { useState } from 'react';

//Axios
import axios from 'axios';
// Folders
import { IMovie, IMovieData } from '../../models/movie.types';



const Movie = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getMovies = async (movie: string) => {
        const apiUrl = `https://www.omdbapi.com/?s=${movie}&apikey=8061a55e`;
        setLoading(true);
        await axios.get<IMovieData>(apiUrl).then((response) => {
            const { Response, Search } = response.data;
            setLoading(false);
            if (Response === 'True') {
                setMovies(Search);
            }
        }).catch(error => {
            setLoading(false);
            console.log(error)
        });
    }

    return { movies, getMovies, loading };
}

export default Movie
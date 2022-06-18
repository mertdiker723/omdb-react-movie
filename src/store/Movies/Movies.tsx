import { useState } from 'react';

//Axios
import axios from 'axios';
// Folders
import { IMovie, IMovieData } from '../../models/movie.types';



const Movie = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    const getMovies = async (movie: string) => {
        const apiUrl = `https://www.omdbapi.com/?s=${movie}&apikey=8061a55e`;
        await axios.get<IMovieData>(apiUrl).then((response) => {
            const { Response, Search } = response.data;
            if (Response === 'True') {
                setMovies(Search);
            }
        }).catch(error => console.log(error));
    }

    return { movies, getMovies };
}

export default Movie
import { useState } from 'react';

import { IMovie } from '../../models/movie.types';

const Movie = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);



    return { movies };
}

export default Movie
import { useState } from "react";
import { InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { IMovieUrl } from "../../models/movie.types";

type MovieFilterProps = {
    setSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
}
const MovieFilter = ({ setSelectedMovie }: MovieFilterProps) => {
    const [movie, setMovie] = useState<string>("Pokemon");
    const movieUrls: IMovieUrl[] = [
        {
            id: 1,
            value: "Pokemon",
            title: "Pokemon"
        },
        {
            id: 2,
            value: "lord+of+the+rings",
            title: "Lord Of The Rings"
        },
        {
            id: 3,
            value: "batman",
            title: "Batman"
        },
        {
            id: 4,
            value: "Star+Wars",
            title: "Star Wars"
        }
    ];

    const handleChange = (event: SelectChangeEvent) => {
        const { value } = event.target;
        setMovie(value);
        setSelectedMovie(value)

    };
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Movie</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={movie}
                label="Movie"
                onChange={handleChange}
            >
                {
                    movieUrls.map((movie) => {
                        return (
                            < MenuItem value={movie.value} key={movie.id} > {movie.title}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl >
    )
}

export default MovieFilter
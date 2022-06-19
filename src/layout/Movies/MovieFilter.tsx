import { useState } from "react";
import { Grid } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { IMovieUrl, IMovieType } from "../../models/movie.types";
import SelectInput from './../../components/SelectInput/SelectInput';

type MovieFilterProps = {
    setSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
    setMovieType: React.Dispatch<React.SetStateAction<string>>;
    movieType: string;
}
const MovieFilter = ({ movieType, setSelectedMovie, setMovieType }: MovieFilterProps) => {
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

    const movieTypes: IMovieType[] = [
        {
            id: 1,
            value: "series",
            title: "Series"
        },
        {
            id: 2,
            value: "movie",
            title: "Movie"
        }
    ]

    const handleChange = (event: SelectChangeEvent) => {
        const { value } = event.target;
        setMovie(value);
        setSelectedMovie(value);
    };

    const handleChangeType = (event: SelectChangeEvent) => {
        const { value } = event.target;
        setMovieType(value);
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <SelectInput
                    value={movie}
                    label={"Movie"}
                    onChange={handleChange}
                    data={movieUrls}
                    emptyItem={false}
                />
                <SelectInput
                    value={movieType}
                    label={"Type"}
                    onChange={handleChangeType}
                    data={movieTypes}
                    emptyItem={true}
                />
            </Grid>
        </Grid>
    )
}

export default MovieFilter
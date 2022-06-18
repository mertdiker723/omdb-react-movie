import { createContext } from "react";
import Movie from "./Movies/Movies";
import { IMovie } from '../models/movie.types';

type InitialContext = {
    movies: IMovie[];
    getMovies: (movie: string) => void;
    loading: boolean;
}

export const ProvideContext = createContext<InitialContext>({} as InitialContext);

type ProvideProps = {
    children: React.ReactNode;
}
export const StoreProvider = ({ children }: ProvideProps) => {
    const { movies, getMovies, loading } = Movie();

    return (
        <ProvideContext.Provider value={{ movies, getMovies, loading }}>
            {children}
        </ProvideContext.Provider>
    )
}
import { createContext } from "react";
import Movie from "./Movies/Movies";
import { IMovie } from '../models/movie.types';

type InitialContext = {
    movies: IMovie[];
}

export const ProvideContext = createContext<InitialContext>({} as InitialContext);

type ProvideProps = {
    children: React.ReactNode;
}
export const StoreProvider = ({ children }: ProvideProps) => {
    const { movies } = Movie();

    return (
        <ProvideContext.Provider value={{ movies }}>
            {children}
        </ProvideContext.Provider>
    )
}
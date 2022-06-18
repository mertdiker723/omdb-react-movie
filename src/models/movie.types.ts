export interface IMovieData {
    Response: string;
    Search: IMovie[];
    totalResults: string;
}

export interface IMovie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}


export interface IMovieColumn {
    id: 'Title' | 'Year' | 'imdbID';
    label: string;
    minWidth?: number;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

export interface IMovieData {
    Title: string;
    Year: string;
    imdbID: string;
}


export interface IMovieUrl {
    id: number;
    value: string;
    title: string;
}
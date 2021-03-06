import { useNavigate } from "react-router-dom";
//Material UI
import { TableBody, TableCell, TableRow } from '@mui/material';

// Folder
import { IMovieColumn, IMovie } from "../../models/movie.types";


type MovieTableBodyProps = {
  page: number;
  rowsPerPage: number;
  columns: readonly IMovieColumn[];
  movies: IMovie[];
}
const MovieTableBody = ({ page, rowsPerPage, columns, movies }: MovieTableBodyProps) => {
  let navigate = useNavigate();
  const routeToMovieDetail = (data: IMovie) => {
    navigate(`/movie-detail/${data.imdbID}`, { replace: true });
  }
  return (
    <TableBody>
      {movies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
        return (
          <TableRow hover onClick={() => routeToMovieDetail(row)} role="checkbox" tabIndex={-1} key={index} sx={{ cursor: "pointer", userSelect: "none" }}>
            {columns.map((column) => {
              console.log()
              return (
                <TableCell key={column.id} align={column.align}>
                  {row[column.id]}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  )
}

export default MovieTableBody
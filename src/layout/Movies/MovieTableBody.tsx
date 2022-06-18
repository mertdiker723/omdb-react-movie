import { useContext } from "react";

//Material UI
import { TableBody, TableCell, TableRow } from '@mui/material';

// Folder
import { IMovieColumn } from "../../models/movie.types";

// Context
import { ProvideContext } from "../../store/Store";

type MovieTableBodyProps = {
  page: number;
  rowsPerPage: number;
  columns: readonly IMovieColumn[];
}
const MovieTableBody = ({ page, rowsPerPage, columns }: MovieTableBodyProps) => {
  const { movies } = useContext(ProvideContext);
  
  return (
    <TableBody>
      {movies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
import { useState, useContext } from "react";

//Material UI
import { Table, TableContainer, TablePagination } from '@mui/material';

// Folders
import MovieTableHeader from './MovieTableHeader';
import MovieTableBody from "./MovieTableBody";
import { IMovieColumn } from "../../models/movie.types";

// Context
import { ProvideContext } from "../../store/Store";

const columns: readonly IMovieColumn[] = [
  { id: 'imdbID', label: 'Imdb ID', minWidth: 60, align: 'left' },
  { id: 'Title', label: 'Title', minWidth: 170, align: 'left' },
  { id: 'Year', label: 'Year', minWidth: 100, align: 'left' },
];

const MovieTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { movies } = useContext(ProvideContext);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <MovieTableHeader
            columns={columns}
          />
          <MovieTableBody
            page={page}
            rowsPerPage={rowsPerPage}
            columns={columns}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={movies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default MovieTable
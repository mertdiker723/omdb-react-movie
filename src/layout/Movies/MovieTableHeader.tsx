
//Material UI
import { TableCell, TableHead, TableRow } from '@mui/material';
import { IMovieColumn } from "../../models/movie.types";

type MovieTableHeaderProps = {
  columns: readonly IMovieColumn[];
}

const MovieTableHeader = ({ columns }: MovieTableHeaderProps) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            style={{ minWidth: column.minWidth }}
            align={column.align}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default MovieTableHeader
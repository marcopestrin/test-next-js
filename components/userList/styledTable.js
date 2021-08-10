import { withStyles } from '@material-ui/core/styles';
import { TableRow, TableCell } from "@material-ui/core";


export const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
        cursor: "pointer"
      }
    },
  }))(TableRow);

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    root: {
        fontSize: 16,
        textTransform: "uppercase"
    }
}))(TableCell);
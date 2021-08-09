import React, { useEffect, useState } from "react";
import Router from 'next/router'
import { TableHead, Table, TableRow, TableBody, TableCell, TableContainer, TablePagination, TextField, Typography, Grid, CircularProgress } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { getUsers, getFilteredUsers } from "../../helpers/requests";


const UserList = () => {

    const [ users, setUsers ] = useState([  ]);
    const [ pagination, setPagination ] = useState({});
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ filter, setFilter ] = useState(false);
    const [ spinner, setSpinner ] = useState(true);
    const columns = ["Id", "Status", "Name", "Email", "Gender"];
    let timeout;

    useEffect(() => fetchData(currentPage), [ currentPage ]);
    const handleChangePage = (event, newPage) => setCurrentPage(newPage);
    const handleClickRow = (id) => {
        return Router.push({
            pathname: '/details',
            query: { id } 
        });
    };

    const fetchData = async(page) => {
        setSpinner(true);
        const { code, meta, data } = await getUsers(page);
        if (code == 200) {
            setUsers(data);
            setPagination(meta.pagination);
            setSpinner(false);
        }
    };

    const getFilteredData = async(name) => {
        const { code, meta, data } = await getFilteredUsers(name);
        if (code == 200) {
            setUsers(data);
            setPagination(meta.pagination);
        }
    };

    const handleSearch = (event) => {
        const { value } = event.target
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            getFilteredData(value);
            setFilter(value !== ""); 
        }, 500);
    };

    const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        root: {
            fontSize: 16,
            textTransform: "uppercase"
        }
    }))(TableCell);
      
    return (
        <>
            { spinner ? <>
                <div style={{"textAlign": "center", "marginTop": "30px"}}>
                    <CircularProgress />
                    <Typography>Loading...</Typography>
                </div>
            </> : <>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="search-field"
                            fullWidth
                            label="Search by name"
                            variant="outlined"
                            onChange={handleSearch}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((name, index) => {
                                            return  <StyledTableCell key={index}>{name}</StyledTableCell>
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.length > 0 ? users.map((user, index) => {
                                        return (
                                            <StyledTableRow
                                                key={index}
                                                onClick={() => handleClickRow(user.id)}
                                            >
                                                <TableCell>{user.id}</TableCell>
                                                <TableCell> {user.status === 'active' ? <CheckIcon color="primary" fontSize="large" /> : <ClearIcon color="error" fontSize="large"  />}</TableCell>
                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.gender}</TableCell>
                                            </StyledTableRow> 
                                        )
                                    }) : <Typography> No Result </Typography>}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12}>
                        { !filter && <Typography align="right">Page {currentPage} of {pagination.pages} </Typography> }
                    </Grid>
                    <Grid item xs={12}>
                        <TablePagination
                            rowsPerPageOptions={[20]}   
                            component="div"
                            count={pagination?.total ? pagination.total : 1 }
                            rowsPerPage={10}
                            page={currentPage ? currentPage : 1 }
                            onPageChange={handleChangePage}
                        />
                    </Grid>
                </Grid>
            </>}
        </>
    )
}

export default UserList
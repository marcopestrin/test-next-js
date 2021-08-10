import React, { useEffect, useState } from "react";
import Router from 'next/router'
import { TableHead, Table, TableRow, TableBody, TableCell, TableContainer, TablePagination, TextField, Typography, Grid, CircularProgress } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { getUsers } from "../../helpers/requests";
import { StyledTableCell, StyledTableRow } from "./styledTable";
import Loading from "../loading";

const UserList = () => {

    const [ users, setUsers ] = useState([  ]);
    const [ pagination, setPagination ] = useState({});
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ spinner, setSpinner ] = useState(true);
    const [ stringFilter, setStringFilter ] = useState("");
    const [ spinnerSearch, setSpinnerSearch ] = useState(false);
    const columns = ["Id", "Status", "Name", "Email", "Gender"];
    let timeout;

    useEffect(() => fetchData(stringFilter, currentPage), [ currentPage ]);

    const handleChangePage = (event, newPage) => setCurrentPage(newPage);

    const handleClickRow = (id) => {
        return Router.push({
            pathname: '/details',
            query: { id } 
        });
    };

    const fetchData = async(name, page) => {
        setSpinner(true);
        const { code, meta, data } = await getUsers(name, page);
        if (code === 200) {
            setUsers(data);
            setPagination(meta.pagination);
            setSpinner(false);
        }
    };

    const getFilteredData = async(name, page) => {
        setSpinnerSearch(true);
        const { code, meta, data } = await getUsers(name, page);
        if (code === 200) {
            setUsers(data);
            setPagination(meta.pagination);
            setSpinnerSearch(false);
        }
    };

    const handleSearch = (event) => {
        const { value } = event.target
        setStringFilter(value);
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            setCurrentPage(0);
            getFilteredData(value, 1);
        }, 500);
    };

    return (
        <>
            { spinner ? <Loading /> : <>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="search-field"
                            fullWidth
                            value={stringFilter}
                            label="Search by name"
                            variant="outlined"
                            onChange={handleSearch}
                        />
                    </Grid>
                    { spinnerSearch ? <Loading /> : <>
                        <Grid item container xs={12}>
                            { users.length > 0 ? <>
                                <Grid item xs={12}>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map((name, index) => {
                                                        return (
                                                            <StyledTableCell key={index}>{name}</StyledTableCell>
                                                        )
                                                    })}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {users.map((user, index) => {
                                                    return (
                                                        <StyledTableRow
                                                            key={index}
                                                            onClick={() => handleClickRow(user.id)}
                                                            hover={true}
                                                        >
                                                            <TableCell>{user.id}</TableCell>
                                                            <TableCell>{user.status === "active" ? <CheckIcon color="primary" fontSize="large" /> : <ClearIcon color="error" fontSize="large" />}</TableCell>
                                                            <TableCell>{user.name}</TableCell>
                                                            <TableCell>{user.email}</TableCell>
                                                            <TableCell>{user.gender}</TableCell>
                                                        </StyledTableRow> 
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align="right">Page {currentPage +1 } of {pagination.pages} </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    {currentPage +1 && <TablePagination
                                        rowsPerPageOptions={[20]}   
                                        component="div"
                                        count={pagination?.total ? pagination.total : 1 }
                                        rowsPerPage={20}
                                        page={currentPage}
                                        onPageChange={handleChangePage}
                                    /> }
                                </Grid>
                            </> : <Typography>No Results</Typography> }
                        </Grid> 
                    </> }
                </Grid>
            </>}
        </>
    )
}

export default UserList
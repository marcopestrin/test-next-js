
import React, { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import { ListItemText, ListItem, List, Typography, Grid, Tooltip } from '@material-ui/core/';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from '@material-ui/core/styles';
import { getUserById } from "../../helpers/requests";
import Loading from "../loading";

const useStyles = makeStyles((theme) => ({
    cursorPointer: {
        cursor: "pointer"
    }
}));

const DetailsUser = () => {

    const [ detailsUser, setDetailsUser ] = useState({});
    const [ spinner, setSpinner ] = useState(true);
    const router = useRouter();
    const classes = useStyles();

    useEffect(( ) => {
        const { id } = router.query;
        if (id !== undefined) {
            fetchData(id);
        }
    }, [router.query]);

    const fetchData = async(id) => {
        setSpinner(true);
        const { code, meta, data } = await getUserById(id);
        if (code == 200) {
            setDetailsUser(data);
        }
        setSpinner(false);
    };

    const goToPrevUser = () => refreshWithNewId(JSON.parse(router.query.id) -1);
    const goToNextUser = () => refreshWithNewId(JSON.parse(router.query.id) +1);

    const refreshWithNewId = (id) => {
        return Router.push({
            pathname: '/details',
            query: { id } 
        });
    }
    
    return (
        <>
            { spinner ? <Loading /> : <> 
                <Grid container spacing={3}>
                    { detailsUser && Object.keys(detailsUser).length > 0 ? <>
                        <Grid item xs={12}>
                            <List>
                                <ListItem divider>
                                    <ListItemText primary="Identifier" secondary={detailsUser.id} />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="Status" secondary={detailsUser.status} />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="Name" secondary={detailsUser.name} />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="Email address" secondary={detailsUser.email} />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="Gender" secondary={detailsUser.gender} />
                                </ListItem>
                            </List>
                        </Grid>
                    </> : <Typography> No Result </Typography> }
                </Grid>

                <Grid item xs={12}>
                    <Tooltip title="Previous User" className={classes.cursorPointer}>
                        <NavigateBeforeIcon
                            onClick={goToPrevUser}
                            color="primary"
                            fontSize="large"
                        />
                    </Tooltip>
                    <Tooltip title="Next User" className={classes.cursorPointer}>
                        <NavigateNextIcon
                            onClick={goToNextUser}
                            color="primary"
                            fontSize="large"
                        />
                    </Tooltip>
                </Grid>
            </> }
        </>
    )
}

export default DetailsUser
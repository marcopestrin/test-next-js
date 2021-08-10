
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { ListItemText, ListItem, List, Typography } from '@material-ui/core/';
import { getUserById } from "../../helpers/requests";
import Loading from "../loading";

const DetailsUser = () => {

    const [ detailsUser, setDetailsUser ] = useState({});
    const [ spinner, setSpinner ] = useState(true);
    const router = useRouter();

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
            setSpinner(false);
        }
    }

    return (
        <>
            { spinner ? <Loading /> : <> 
                { detailsUser ? 
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
                : <Typography> No Result </Typography> }
            </> }
        </>
    )
}

export default DetailsUser
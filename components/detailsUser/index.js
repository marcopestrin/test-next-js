
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { ListItemText, ListItem, List } from '@material-ui/core/';
import { getUserById } from "../../helpers/requests";

const DetailsUser = () => {

    const [ detailsUser, setDetailsUser ] = useState({});
    const router = useRouter();

    useEffect(( ) => {
        const { id } = router.query;
        if (id !== undefined) {
            fetchData(id);
        }
    }, [router.query]);

    const fetchData = async(id) => {
        const { code, meta, data } = await getUserById(id);
        if (code == 200) {
            setDetailsUser(data);
        }
    }

    useEffect(() => {
        console.log(detailsUser);
    }, [detailsUser])

    return (
        <>
        { detailsUser && 
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
        }
        </>
    )
}

export default DetailsUser
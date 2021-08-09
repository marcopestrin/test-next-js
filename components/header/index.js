import Link from 'next/link'
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

export default function Header() {
    const classes = useStyles();
    const router = useRouter();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            {router.pathname === "/details" && (
                                <Link href="/list">
                                    <ArrowBackIcon />
                                </Link>
                            )}
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </div>
    )
}
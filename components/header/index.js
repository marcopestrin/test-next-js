import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Toolbar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    icon: {
        cursor: "pointer",
        marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

const Header = () => {
    const router = useRouter();
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            {router.pathname === "/details" && (
                                <Link href="/list">
                                    <ArrowBackIcon className={classes.icon} />
                                </Link>
                            )}
                            <Typography variant="h6" className={classes.title}>
                                Marco Pestrin - APPLICAZIONE DI TEST
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
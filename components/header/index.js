import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Toolbar, Grid, Typography, Tooltip } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    cursorPointer: {
        cursor: "pointer",
        marginRight: theme.spacing(2)
    }
}));

const Header = () => {
    const router = useRouter();
    const classes = useStyles();
    
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>
                        {router.pathname === "/details" && (
                            <Link href="/list">
                                <Tooltip title="Back to user list">
                                    <ArrowBackIcon className={classes.cursorPointer} />
                                </Tooltip>
                            </Link>
                        )}
                        <Typography>
                            Marco Pestrin - APPLICAZIONE DI TEST
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    )
}

export default Header
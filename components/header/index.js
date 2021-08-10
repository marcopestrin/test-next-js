import Link from 'next/link'
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { useRouter } from 'next/router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Header = () => {
    const router = useRouter();

    const customStyle = {
        "flexGrow": "1",
        "marginBottom": "20px"
    };
    
    return (
        <div style={customStyle}>
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

export default Header
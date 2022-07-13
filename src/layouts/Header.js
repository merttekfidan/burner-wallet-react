import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
function Header() {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative' >
                <Toolbar>
                    <Typography variant='h4'>
                        Hi Mom!
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
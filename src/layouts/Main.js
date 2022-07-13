import { Typography, Container, Grid, Button, Paper } from '@mui/material'
import SearchBar from './../components/SearchBar'
import Results from './../components/Results'
function Main() {
    return (
        <main>
            <SearchBar />
            <Results />
        </main >
    );
}

export default Main;
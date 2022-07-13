import { useState, useEffect } from 'react'
import { Container, Grid, Paper, Typography, Divider } from '@mui/material'
import { useSelector } from 'react-redux';
import Chart from './Chart'
import TransferList from './TransferList';
function Results() {
    const [data, setData] = useState([])
    const [dataFromWallet, setDataFromWallet] = useState([])
    const [dataToWallet, setDataToWallet] = useState([])
    const { tnxFrom, tnxTo } = useSelector((state) => state.transfer)
    const sort = (tnxs) => {
        let sortedTnxs = []
        sortedTnxs = [...tnxs.data]
        console.log('tnx:', tnxs)
        return (sortedTnxs.filter(i => i.length > 2).sort((a, b) => {
            return b.length - a.length;
        }))
    }
    useEffect(() => {
        if (tnxFrom && tnxFrom.status === 'success') {
            setDataFromWallet(sort(tnxFrom))

        }
        if (tnxTo && tnxTo.status === 'success') {
            setDataToWallet(sort(tnxTo))
        }
        console.log(dataToWallet)
    }, [tnxFrom, tnxTo])
    return (
        <Container maxWidth='lg'>
            <Grid container justify='center' spacing={2}>

                <Grid item xs={12} md={6} lg={6}>
                    <Paper>
                        <Typography variant='h4' color='textPrimary' align='center' gutterBottom>
                            Received From
                        </Typography>
                        <Divider />

                        <TransferList data={dataToWallet} ifSuccess={() => tnxTo.status === 'success' ? true : false} />

                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <Paper>
                        <Typography variant='h4' align='center' gutterBottom>

                            Sent To
                        </Typography>
                        <Divider />
                        <TransferList data={dataFromWallet} ifSuccess={() => tnxFrom.status === 'success' ? true : false} />

                    </Paper>
                </Grid>

            </Grid>
        </Container >
    );
}

export default Results;
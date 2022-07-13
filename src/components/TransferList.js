import { useState, useEffect } from 'react'
import { Typography, Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getTransfersFromWallet, getTransfersToWallet } from '.././features/transferSlice'



function TransferList({ data, ifSuccess }) {
    const DATA_LIMIT = 5
    const dispatch = useDispatch()
    const [walletTnx, setWalletTnx] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getTransfersToWallet(e.target.dataset.value))
        dispatch(getTransfersFromWallet(e.target.dataset.value))
        console.log(e.target.dataset.value)
    }
    useEffect(() => {
        if (ifSuccess) {
            setWalletTnx(data)
        }
    }, [data, ifSuccess])
    return (
        <Container align='left' sx={{
            fontSize: '1rem'
        }}>
            {ifSuccess &&
                data.filter((item, idx) => idx < DATA_LIMIT).map((e, i) => {
                    return <p onClick={handleClick} data-value={e.walletAddress} key={i}>{e.walletAddress} - {e.length}</p>

                })
            }
        </Container >
    );
}

export default TransferList;
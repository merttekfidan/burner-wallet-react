import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, TextField, Stack, Button, Typography } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import { getTransfersFromWallet, getTransfersToWallet } from './../features/transferSlice'

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')
    const [currentAddress, setCurrentAddress] = useState('')
    const currentWalletAddress = useSelector(state => state.transfer.walletAddress)
    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        console.log(searchQuery)
        if (searchQuery) {
            dispatch(getTransfersFromWallet(searchQuery))
            dispatch(getTransfersToWallet(searchQuery))
        }
        else {
            console.log('empty')
        }
        setSearchQuery('')
    }
    useEffect(() => {
        setCurrentAddress(currentWalletAddress)
    }, [currentWalletAddress])
    return (
        <Stack alignItems='center' direction='column' spacing={3} sx={{ padding: '20px' }}>
            <form onSubmit={handleForm}>
                <TextField
                    id="search-bar"
                    className="text"
                    onInput={(e) => {
                        setSearchQuery(e.target.value);
                        console.log(e.target.value)
                    }}
                    value={searchQuery}
                    label="Enter a wallet address"
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    sx={{ width: '300px' }}
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
            </form>
            <Typography >
                {currentAddress}
            </Typography>
        </Stack>
    );
}

export default SearchBar;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiService from './apiService'
const initialState = {
    walletAddress: '',
    transfers: [],
    fromWallet: [],
    toWallet: [],
    tnxFrom: {},
    tnxTo: {}
}

export const getTransfersFromWallet = createAsyncThunk('transfer/getTransfersFromWallet', async (walletAddress, thunkAPI) => {
    try {
        return await apiService.getTransfersFromWallet(walletAddress)
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})
export const getTransfersToWallet = createAsyncThunk('transfer/getTransfersToWallet', async (walletAddress, thunkAPI) => {
    try {
        return await apiService.getTransfersToWallet(walletAddress)
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})


const transferSlice = createSlice({
    name: 'transfer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTransfersFromWallet.fulfilled, (state, action) => {
                state.walletAddress = action.meta.arg
                state.fromWallet.push(action.payload)
                state.tnxFrom = action.payload
            })
            .addCase(getTransfersToWallet.fulfilled, (state, action) => {
                state.toWallet.push(action.payload)
                state.tnxTo = action.payload
            })
    }
})

export default transferSlice.reducer
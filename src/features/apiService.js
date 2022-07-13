import axios from 'axios'

const API_URL = 'https://infinite-dusk-39113.herokuapp.com/api/v1'
//http://localhost:8080/api/v1/get-transactions-by-wallet/0xa800f34505e8b340cf3ab8793cb40bf09042b28f
const getTransfersFromWallet = async (walletAddress) => {
    const response = await axios.get(`${API_URL}/get-transactions-from-wallet/${walletAddress}`)
    return response.data
}
const getTransfersToWallet = async (walletAddress) => {
    const response = await axios.get(`${API_URL}/get-transactions-to-wallet/${walletAddress}`)
    return response.data
}

const apiService = {
    getTransfersFromWallet,
    getTransfersToWallet
}

export default apiService

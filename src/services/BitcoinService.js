import axios from "axios"
import { storageService } from "./storageService.js"

export const bitcoinService = {
    getRate
}



async function getRate(coins) {
    if (!storageService.load('btc') || storageService.load('dollar') !== coins) {
        const btcDollarRate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        storageService.store('btc', btcDollarRate.data)
        storageService.store('dollar', coins)
    }
    return storageService.load('btc')
}
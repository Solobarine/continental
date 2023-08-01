import { defineStore } from "pinia";
import domain from "../config/api";
import postData from "../utils/postData";
import getData from "../utils/getData";
import { useUserStore } from "./UserStore";

const useTransferStore = defineStore('transfer', {
    state: () =>({
        transfers: [],
        loading: Boolean(false),
        errror: String(''),
        success: ''
    }),
    getters: {
        successful() {
            return this.transfers.filter(transfer => transfer.status === 'completed')
        },
        failed() {
            return this.transfers.filter(transfer => transfer.status === 'failed')
        }
    },
    actions: {
        async getTransfers() {
            this.loading = true
            const url = `${domain}/account/transfers`
            const token = `Bearer ${localStorage.getItem('auth_token')}`
            const transfers = await getData(url, token)
            this.loading = false
            if (transfers.status !== 201) {
                this.error = transfers.response.data.message
                return
            }
            
            this.transfers = transfers.data.transfers
            this.error = ''
            return
        },
        async makeTransfer(payload) {
            this.loading = true
            const url = `${domain}/account/transfers`
            const token = `Bearer ${localStorage.getItem('auth_token')}`
            const transfer = await postData(url, payload, token)
            // console.log(transfer);
            this.loading = false
            if (transfer && transfer.status !== 201) {
                this.error = transfer.response.data.message
                return {error: this.error}
            }
            this.transfers.push(transfer.data.transfer)
            this.success = 'Transfer Successful'
            // console.log(this.success);
            this.error = ''
            useUserStore().updateBalanceTransfer(transfer.data.amount)
            return {success: this.success}
        }
    }
})

export { useTransferStore }
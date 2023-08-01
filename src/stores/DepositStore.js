import { defineStore } from "pinia";
import domain from "../config/api";
import postData from "../utils/postData";
import getData from "../utils/getData";
import { useUserStore } from "./UserStore";

const useDepositStore = defineStore('deposit', {
    state: () =>({
        deposits: [],
        loading: Boolean(false),
        errror: String(''),
        message: String('')
    }),
    getters: {
        successful() {
            return this.messages.filter(message => message.status === 'completed')
        },
        failed() {
            return this.messages.filter(message => message.status === 'failed')
        }
    },
    actions: {
        async getDeposits() {
            this.loading = true
            const url = `${domain}/account/deposits`
            const token = `Bearer ${localStorage.getItem('auth_token')}`
            const deposits = await getData(url, token)
            console.log(deposits);
            this.loading = false
            if (deposits.status !== 200) {
                this.error = deposits.response.data.message
                return
            }
            
            this.deposits = deposits.data.deposits
            this.message = deposits.data.message
            this.error = ''
            return
        },
        async makeDeposit(payload) {
            this.loading = true
            const url = `${domain}/account/deposits`
            const token = `Bearer ${localStorage.getItem('auth_token')}`
            const deposit = await postData(url, payload, token)
            console.log(deposit);
            this.loading = false
            if (deposit.status !== 201) {
                this.error = deposit.response.data.message
                return
            }

            this.deposits.push(deposit.data)
            console.log(useUserStore().user.balance);
            useUserStore().updateBalanceDeposit(deposit.data.amount)
            console.log(useUserStore().user.balance);
            this.message = deposit.data.message
            this.error = ''

            return
        }
    }
})

export { useDepositStore }
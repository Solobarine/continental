import axios from "axios";
import { defineStore } from "pinia";
import { router } from "../router/router";
import domain from "../config/api";

const useUserStore = defineStore('users', {
    state: () => ({
        user: {},
        loading: Boolean(true),
        is_logged_in: false,
        error: '',
        recents: {},
    }),
    actions: {
        setLoggedIn() {
            this.is_logged_in = true
        },
        updateBalanceDeposit(amount) {
            let balance = parseFloat(this.user.balance)
            balance += parseFloat(amount)
        },
        updateBalanceTransfer(amount) {
            let balance = parseFloat(this.user.balance)
            balance -= parseFloat(amount)
        },
        async login(payload) {
            this.loading = true
            this.error = ''
            const url = `${domain}/login`
            axios.post(url, payload)
            .then(user => {
                this.user = user.data.user
                this.error = ''
                localStorage.setItem('auth_token', user.data.authorization.token)
                this.is_logged_in = true
                return router.push('/dashboard')
            })
            .catch(error => {
                this.error = error.response.data.message
            })
        },
        async register(payload) {
            this.loading = true
            const url = `${domain}/register`
            const user = axios.post(url, payload)
            .then(res => {
                this.user = res.data.user
                this.error = ''
                this.is_logged_in = true
                localStorage.setItem('auth_token', res.data.authorization.token)
                return router.push('/dashboard')
            })
            .catch(() => this.error = user.response.data.message)
        },
        async getUser() {
            if (!localStorage.getItem('auth_token')) return router.push('/login')
            this.loading = true
            const url = `${domain}/user`
            const user = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}` 
                }
            })
            .then(res => {
                console.log(res);
                if (res.data === '') return router.push('/login')
                this.user = res.data
                this.error = ''
                this.is_logged_in = true
            })
            .catch(() => {
                return router.push('/login')
            })
            this.loading = false
            console.log(user);
        },
        async getReceiver(payload) {
            const url = `${domain}/receiver/account-number`
            const token = `Bearer ${localStorage.getItem('auth_token')}`
            const receiver = await axios.post(url, payload, {
                headers: {
                    'Authorization': token
                }
            })
            .then(res => res)
            .catch((error) => error)
            return receiver
        },
        async recents() {
            const url = `${domain}/user/recents`
            const recents = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}` 
                }
            })
            console.log(recents);
            this.recents = recents.data
            return recents.data
        },
        async logout() {
            const url = `${domain}/logout`
            const token = `Bearer ${localStorage.getItem('auth_token')}`
            axios.post(url, null, {
                headers: {
                    'Authorization': token
                }
            })
            .then(() => {
                localStorage.removeItem('auth_token')
                router.push('/login')
            }).catch((error) => this.error = error.response.data.message)
            this.is_logged_in = false
            return
        }
    }
})

export { useUserStore };
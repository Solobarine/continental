import { defineStore } from "pinia";
import domain from "../config/api";
import getData from "../utils/getData";
import postData from "../utils/postData";

const useCardStore = defineStore('cards', {
    state: () => ({
        cards: Array,
        loading: Boolean(false),
        error: String(''),
        message: String('')
    }),
    actions: {
        async getCards() {
            this.loading = true
            const url = `${domain}/account/cards`
            const token = `Bearer ${localStorage.getItem('auth_token')}`

            const cards = getData(url, token)
            this.loading = false
            if (cards.status !== 201) {
                this.error = cards.response.data.message
                return
            }

            this.cards = cards.data
            this.message = cards.data.message
            this.error = ''
            return
        },
        async createCard(payload) {
            this.loading = true
            const url = `${domain}/account/cards`
            const token = `Bearer ${localStorage.getItem('auth_token')}`

            const card = postData(url,payload, token)
            this.loading = false
            if (card.status !== 201) {
                this.error = card.response.data.message
                return
            }

            this.cards.push(card.data)
            this.error = ''
            this.message = card.data.message
            return
        }
    }
})

export { useCardStore }
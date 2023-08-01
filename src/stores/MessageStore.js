import { defineStore } from "pinia";
import { starred } from "../utils/messageHelpers";
import domain from "../config/api";
import getData from "../utils/getData";
import patchData from "../utils/patchData";

const useMessageStore = defineStore('messages', {
    state: () => ({
        messages: [],
        loading: Boolean(false),
        error: '',
        message: ''
    }),
    getters: {
        getImportant: () => {
            console.log(this);
            // if (this.messages) return this.messages.filter((message => message.important))
        },
        getArchived: () => {
            return this.messages.filter((message => message.archived))
        }
    },
    actions: {
        async getMessages() {
            this.loading = true
            const url = `${domain}/account/messages`
            const token = `Bearer ${localStorage.getItem('auth_token')}`
            const messages = await getData(url, token)
            console.log(messages);
            this.loading = false
            if (messages.status !== 201) {
                console.log('hi');
                return this.error = messages.response.data.status
                // return
            }

            this.messages = messages.data.messages
            this.error = false
        },
        async toggleStarred(id, element, value) {
            this.loading = true
            starred(element)
            this.messages.map(message => {
                if (message.id === id) message.starred = !message.starred
            })
            console.log(value);
            const url = `${domain}/account/messages/${id}`
            const token = `Bearer ${localStorage.getItem('auth_token')}`
            const payload = {
                starred: value
            }
            const message = await patchData(url, payload, token)
            console.log(message);
            this.loading = false
            if (message.status !== 201) {
                this.error = message.response.data.status
                return
            }

            this.message = message.data
            this.error = false
        },
        async toggleImportant(id, value) {
            this.loading = true
            this.messages.map((message) => {
                if (message.id === id) message.important = !message.important
            })
            const url = `${domain}/account/messages/${id}`
            const token = `Bearer ${localStorage.getItem('auth_token')}`
            console.log(this.messages[id]);

            const payload = {
                important: value
            }

            const message = await patchData(url, payload, token)
            console.log(message);
            this.loading = false
            if (message.status !== 201) {
                this.error = message.response.data.status
                return
            }

            this.message = message.data
            this.error = false
        },
        async toggleArchive(id, value) {
            this.loading = true
            this.messages.map(message => {
                if (message.id === id) message.archived = !message.archived
            })
            const url = `${domain}/account/messages/${id}`
            const token = `Bearer ${localStorage.getItem('auth_token')}`

            const payload = {
                archived: value
            }

            const message = await patchData(url, payload, token)
            this.loading = false
            if (message.status !== 201) {
                this.error = message.response.data.status
                return
            }

            this.message = message.data
            this.error = false
        },
        getStarred() {
            const starredMessages =  JSON.parse(JSON.stringify(this.messages)).map(message => {
                message.starred && message;
            })
            return starredMessages
        },
    }
})

export { useMessageStore }
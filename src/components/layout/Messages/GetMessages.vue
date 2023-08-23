<template>
  <MessageCard
    v-for="message in inbox"
    :key="message"
    :index="message.id"
    :sender="message.sender"
    :title="message.title"
    :body="message.body"
    :date="message.created_at"
    :id="message.id"
    :starred="message.starred"
    :important="message.important"
    :archived="message.archived"
    :opened="message.opened" />
</template>
<script setup>
import MessageCard from './MessageCard.vue'
import { useMessageStore } from '../../../stores/MessageStore'

await useMessageStore().getMessages()
let inbox = useMessageStore().messages
</script>
<style scoped></style>

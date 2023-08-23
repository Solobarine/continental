<template>
  <div class="message_card">
    <div class="main">
      <div>
        <input
          type="checkbox"
          name="check"
          id="check"
          :checked="props.important"
          @click="messageStore.toggleImportant(props.id, !props.important)" />
        <p id="name">{{ props.sender }}</p>
      </div>
      <strong id="date">{{ convertDate(props.date) }}</strong>
    </div>
    <div id="title_section">
      <ion-icon
        class="star"
        :index="props.index"
        :name="props.starred ? 'star' : 'star-outline'"
        @click="messageStore.toggleStarred(props.id, this, !props.starred)"></ion-icon>
      <strong id="title">{{ props.title }}</strong>
    </div>
    <p id="desc">{{ props.body }}</p>
    <ion-icon
      v-if="!props.opened"
      class="message_alert"
      name="alert-circle-outline"></ion-icon>
  </div>
</template>
<script setup>
import { useMessageStore } from '../../../stores/MessageStore'
import convertDate from '../../../utils/convertDate'
const messageStore = useMessageStore()

const props = defineProps({
  index: Number,
  title: String,
  body: String,
  id: Number,
  sender: String,
  date: String,
  important: Number,
  opened: Number,
  starred: Number,
  archived: Number
})
</script>
<style scoped>
.message_card {
  position: relative;
  display: grid;
  gap: 10px;
  transition: 0.4s ease;
  padding: 15px 5px;
  border-top: 1px solid var(--secondary);
}

.message_card:last-of-type {
  border-bottom: 0.2px solid var(--secondary);
}

.message_card:hover {
  background-color: var(--faint);
}

.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3px;
}

.main > div,
#title_section {
  display: flex;
  column-gap: 20px;
}

ion-icon {
  font-size: 18px;
}

.star[name='star'] {
  color: gold;
}

#desc {
  font-size: 0.9rem;
}

.message_alert {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 20px;
  color: green;
  visibility: visible;
}
</style>

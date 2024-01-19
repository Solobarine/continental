<script setup>
import { useUserStore } from '../../../../stores/UserStore.js'
const props = defineProps(['payload', 'services'])
const userStore = useUserStore()
const { account_number, first_name, last_name } = userStore.user

const service = props.services.filter(
  service => service.name === props.payload.service
)
console.log(service)
</script>

<template>
  <div class="depositSummary">
    <div id="head"></div>
    <div>
      <div class="title">
        <h3>Summary</h3>
        <img src="/src/assets/male_user.png" alt="profile" />
      </div>
      <div class="field">
        <label>Name</label>
        <p>{{ first_name }} {{ last_name }}</p>
      </div>
      <div class="field">
        <label>Account Number</label>
        <p>{{ account_number }}</p>
      </div>
      <div class="field">
        <label>Amount</label>
        <p id="amount">${{ props.payload.amount }}</p>
      </div>
      <div class="field">
        <label>Payment Service</label>
        <component v-if="service.length === 1" :is="service[0].logo" />
        <p v-else id="error">Please Choose a Payment Service</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.depositSummary {
  max-width: 30em;
  width: 100%;
  margin: auto;
  padding: 1em;
  padding-bottom: 4em;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0.2em;
}

.title img {
  width: 3em;
  background-color: var(--secondary);
  border-radius: 50%;
}

.field {
  display: grid;
  gap: 0.3em;
}

.field label {
  font-size: 1em;
  font-weight: 600;
}

.field #amount {
  font-size: 2em;
}

.field svg {
  height: 5em;
}

#error {
  color: var(--red);
  font-size: 1.3em;
  background-color: transparent;
  padding: 0;
}
</style>

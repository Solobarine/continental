<script setup>
const props = defineProps(['payload', 'receiver'])
const emit = defineEmits()
console.log(props)
</script>

<template>
  <div class="summary">
    <div class="title">
      <h3>Transfer Summary</h3>
      <img src="female_user.png" alt="" />
    </div>
    <div class="field">
      <label>Receiver Name</label>
      <p v-if="props.receiver">
        {{ props.receiver.first_name }} {{ props.receiver.last_name }}
      </p>
    </div>
    <div class="field">
      <label>Account Number</label>
      <p>{{ props.payload.account_number }}</p>
    </div>
    <div class="field">
      <label>Amount</label>
      <p>{{ props.payload.amount }}</p>
    </div>
    <div class="field">
      <label>Description</label>
      <p>{{ props.payload.description }}</p>
    </div>
    <div id="controls">
      <button @click="emit('cancelTransfer', false)">Cancel</button>
      <button @click="emit('makeTransfer', true)">Transfer Funds</button>
    </div>
  </div>
</template>

<style scoped>
.summary {
  position: fixed;
  top: 30%;
  left: 50%;
  max-width: 30em;
  width: 100%;
  padding: 2em 1em;
  border-radius: 0.5em;
  background-color: var(--faint);
  z-index: 40;
  box-shadow: var(--box-shadow);
  transition: 0.5s ease;
}

.summary .field {
  margin-top: 0.5em;
  display: grid;
  gap: 0.2em;
}

.summary label {
  font-weight: 600;
  font-size: 1em;
}

.field p {
  font-size: 1.2em;
}

#controls {
  display: flex;
  justify-content: flex-end;
  gap: 1.4em;
}

#controls button {
  padding: 0.5em;
  outline: none;
  border: none;
  background-color: var(--primary);
  color: var(--faint);
  border-radius: 0.5em;
  cursor: pointer;
}

.summary.hide {
  transform: translateX(200%);
}

.summary.show {
  transform: translateX(-50%);
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3em;
}
</style>
